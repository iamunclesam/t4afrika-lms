/* eslint-disable no-empty-pattern */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged
} from 'firebase/auth'
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  arrayUnion,
  where,
  query,
  getDocs
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
      state.loading = isLoading
    },

    SET_WALLET_BALANCE(state, balance) {
      state.walletBalance = balance
    },

    SET_WALLET_DATA(state, walletData) {
      state.walletData = walletData;
    },
    
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

    async updateWallet({ commit }, { amount, transactionReference, paystackResponse }) {
      try {
        const user = auth.currentUser

        if (!user) {
          throw new Error('User not authenticated')
        }

        const userEmail = user.email
        const userQuery = query(collection(db, 'Users'), where('email', '==', userEmail))
        const querySnapshot = await getDocs(userQuery)

        if (querySnapshot.empty) {
          throw new Error('User document not found')
        }

        const userDoc = querySnapshot.docs[0].ref
        const userData = querySnapshot.docs[0].data()

        const updatedWalletBalance = userData.walletBalance + amount

        await updateDoc(userDoc, {
          wallet: arrayUnion({ amountAdded: amount, transactionReference, paystackResponse }),
          walletBalance: updatedWalletBalance
        })

        commit('SET_WALLET_BALANCE', updatedWalletBalance)
        // Display success message or handle success scenario
      } catch (error) {
        console.error('Error updating wallet:', error)
        // Handle error messages here
      }
    },

    async fetchWalletBalance({ commit }) {
      try {
        const user = auth.currentUser

        if (!user) {
          throw new Error('User not authenticated')
        }

        const userEmail = user.email
        const userQuery = query(collection(db, 'Users'), where('email', '==', userEmail))
        const querySnapshot = await getDocs(userQuery)

        if (querySnapshot.empty) {
          throw new Error('User document not found')
        }

        const userData = querySnapshot.docs[0].data()
        const walletBalance = userData.walletBalance

        commit('SET_WALLET_BALANCE', walletBalance)
        return walletBalance
      } catch (error) {
        console.error('Error fetching wallet balance:', error)
        // Handle error messages here
        return null // Or handle it based on your use case
      }
    },

    async fetchWalletData({ commit }) {
      try {
        const user = auth.currentUser;

        if (!user) {
          throw new Error('User not authenticated');
        }

        const userEmail = user.email;
        const userQuery = query(collection(db, 'Users'), where('email', '==', userEmail));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty) {
          throw new Error('User document not found');
        }

        const userData = querySnapshot.docs[0].data();
        const walletData = userData.wallet || [];

        commit('SET_WALLET_DATA', walletData);
        return walletData;
      } catch (error) {
        console.error('Error fetching wallet data:', error);
        // Handle error messages here
        return null; // Or handle it based on your use case
      }
    },


    async initAuth({ commit }) {
      try {
        // Set loading state to true to indicate that authentication state is being checked
        commit('SET_LOADING', true)

        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log('User authenticated:', user)
            commit('SET_USER', {
              email: user.email
              // Add other user properties as needed
            })
          } else {
            console.log('User not authenticated')
            commit('SET_USER', null)
          }

          // Set loading state to false once authentication state is resolved
          commit('SET_LOADING', false)
        })
      } catch (error) {
        console.error('Error initializing authentication state:', error)
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
    getWalletData: (state) => state.walletData,
    getWalletBalance: (state) => state.walletBalance
  },

  plugins: [vuexLocal.plugin]
})
