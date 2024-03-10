/* eslint-disable no-empty-pattern */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  collection,
  addDoc,
  where,
  query,
  updateDoc,
  getDocs,
  doc,
  arrayUnion
} from 'firebase/firestore'
import { auth, db } from '@/firebase'
import { createStore } from 'vuex'
import router from '../router'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage, // You can change this to sessionStorage if needed
  key: 'trade4frika', // Change this to a unique key for your app
  reducer: (state) => ({
    user: state.user // Specify the state you want to persist
  })
})

export default createStore({
  state: {
    user: null,
    loading: false,
    walletData: [],
    walletBalance: 0
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },

    updateWalletData(state, newData) {
      state.walletData = newData
    },

    updateWalletBalance(state, newBalance) {
      state.walletBalance = newBalance
    }
  },
  actions: {
    async register({ commit }, userDetails) {
      const { id, email, fullName, password } = userDetails

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(userCredential.user)

        const user = {
          id,
          fullName,
          email,
          wallet: [],
          tasks: [],
          certificates: []
        }

        const usersCollection = collection(db, 'Users')
        await addDoc(usersCollection, user)

        commit('SET_USER', user)
        router.push('/login')
        // Display a success toast
        alert('Sign Up Successful')

        return user
      } catch (error) {
        console.error('Registration Error:', error)

        switch (error.code) {
          case 'auth/email-already-in-use':
            // toast.error("Email in Use")
            break

          case 'auth/invalid-email':
            // toast.error("Invalid Email")
            break

          case 'auth/operation-not-allowed':
            // toast.error("Operation not allowed")
            break

          case 'auth/weak-password':
            // toast.error("Weak Password")
            break

          default:
            alert('Something went wrong. Check console for details.')
        }

        return
      }
    },

    async login({ commit }, credentials) {
      const { email, password } = credentials

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = {
          email: userCredential.user.email
        }
        commit('SET_USER', user)
        router.push('/')

        // toast.success("Sign In Successful")
        return user
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            // toast.error("User doesn't exist")
            break

          case 'auth/wrong-password':
            // toast.error('Wrong password')
            break
          default:
            // alert('Something went wrong')
        }
      }
    },

    async updateWallet({ commit, state }, { amount, transactionReference }) {
      const isTransactionExist =
        Array.isArray(state.walletData) &&
        state.walletData.some((transaction) => transaction.id === transactionReference)
  
      if (!isTransactionExist) {
        const updatedWalletData = [
          ...state.walletData,
          { amountAdded: amount, id: transactionReference }
        ]
  
        commit('updateWalletData', updatedWalletData)
  
        // Check if walletData is an array before attempting to use reduce
        if (Array.isArray(updatedWalletData)) {
          // Calculate the updated wallet balance
          const updatedWalletBalance = await this.dispatch(
            'calculateWalletBalance',
            updatedWalletData
          )
  
          // Update the wallet balance in the Vuex store
          commit('updateWalletBalance', updatedWalletBalance)
  
          // You can also update the wallet balance in Firestore here if needed
          console.log('Before updateWalletBalanceInFirestore', updatedWalletData)
          await this.dispatch('updateWalletBalanceInFirestore', updatedWalletData)
          console.log('After updateWalletBalanceInFirestore')
  
          // Fetch the updated wallet balance after the update
          await this.dispatch('calculateWalletBalance')
        } else {
          console.error('Error: updatedWalletData is not an array')
        }
      }
    },

    async updateWalletBalanceInFirestore({ commit, state }, walletData) {
      try {
        const updatedWalletBalance = await new Promise((resolve, reject) => {
          const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
              try {
                const userQuery = query(collection(db, 'Users'), where('email', '==', user.email));
                const querySnapshot = await getDocs(userQuery);
    
                if (!querySnapshot.empty) {
                  const userDocRef = doc(db, 'Users', querySnapshot.docs[0].id);
    
                  const currentWalletBalance = querySnapshot.docs[0]?.data()?.walletBalance ?? 0;
    
                  const updatedBalance =
                    currentWalletBalance + (await this.dispatch('calculateWalletBalance', walletData));
                  const addedMoney = await this.dispatch('calculateWalletBalance', walletData);
    
                  await updateDoc(userDocRef, {
                    wallet: arrayUnion({ amountAdded: addedMoney }),
                    walletBalance: updatedBalance,
                  });
    
                  console.log('Wallet balance in Firestore updated successfully', updatedBalance);
    
                  commit('updateWalletBalance', updatedBalance);
    
                  unsubscribe(); // Unsubscribe from onAuthStateChanged after the update
                  resolve(updatedBalance); // Resolve the promise with updatedWalletBalance
                } else {
                  console.error('Error: User document not found');
                  reject('Error: User document not found');
                }
              } catch (error) {
                console.error('Error updating wallet balance in Firestore:', error);
                reject(error);
              }
            } else {
              console.error('Error: User not authenticated');
              reject('Error: User not authenticated');
            }
          });
        });
    
        return updatedWalletBalance;
      } catch (error) {
        console.error('Error setting up onAuthStateChanged:', error);
        throw error;
      }
    },
    
    async calculateWalletBalance({ commit }, walletData) {
     try {
      if (walletData) {
        const walletAmounts = await walletData.map((transaction) => transaction.amountAdded || 0)
        console.log(walletAmounts.reduce((total, amount) => total + amount, 0));
        return walletAmounts.reduce((total, amount) => total + amount, 0)
      } 

      else {
        console.error()
        return 0 // or handle it in another way based on your use case
      }
     }

     catch(e) {
       console.log('Error:', e);
     }


    },

    async initAuth({ commit }) {
      try {
        // Set loading state to true to indicate that authentication state is being checked
        commit('SET_LOADING', true);
    
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log('User authenticated:', user);
            commit('SET_USER', {
              email: user.email,
              // Add other user properties as needed
            });
          } else {
            console.log('User not authenticated');
            commit('SET_USER', null);
          }
    
          // Set loading state to false once authentication state is resolved
          commit('SET_LOADING', false);
        });
      } catch (error) {
        console.error('Error initializing authentication state:', error);
        commit('SET_LOADING', false);
      }
    },
    
  

  },


  getters: {
    isAuthenticated: (state) => !!state.user,
    getWalletData: (state) => state.walletData,
    getWalletBalance: (state) => state.walletBalance,
  },

  plugins: [vuexLocal.plugin],
 
})
