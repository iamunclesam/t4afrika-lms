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
  arrayUnion,
  where,
  query,
  getDocs
} from 'firebase/firestore'
import { auth, db } from '@/firebase'
import { createStore } from 'vuex'
import router from '../router'
import VuexPersistence from 'vuex-persist'
import { useToast } from 'vue-toastify';

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
    walletBalance: 0,
    numberOfWeeksPaid: 0
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
      state.walletData = walletData
    },

    CHANGE_PLAN(state, { planId, amount }) {
      state.user.subscriptionPlan = { isPaid: true, amount: amount, planId: planId }
      state.user.walletBalance -= amount
    },

    SET_NUMBER_OF_WEEKS_PAID(state, numberOfWeeksPaid) {
      state.numberOfWeeksPaid = numberOfWeeksPaid
    }
  },
  actions: {
    async register({ commit }, userDetails) {
      const { id, email, fullName, password, subscriptionPlan, subscriptionPlanHistory } = userDetails

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(userCredential.user)

        const user = {
          id,
          fullName,
          email,
          password, // Ensure this is hashed in a real application
          subscriptionPlan, // Add subscription plan to the user object
          subscriptionPlanHistory ,
          wallet: [],
          walletBalance: 0,
          certificates: [],
          createdAt: new Date(),
          updatedAt: new Date()
        }

        // Save user to Firestore
        const usersCollection = collection(db, 'Users')
        await addDoc(usersCollection, user)

        commit('SET_USER', user)
        router.push('/verify-email')
        alert('Sign Up Successful')

        return user
      } catch (error) {
        console.error('Registration Error:', error)
        // Handle error
        return null
      }
    },

    handleSubscription({ commit }, user) {
      const currentDate = new Date()

      if (currentDate > user.subscription.expirationDate) {
        const renewedExpirationDate = new Date(
          currentDate.getFullYear() + 1,
          currentDate.getMonth(),
          currentDate.getDate()
        )

        user.subscription.expirationDate = renewedExpirationDate

        commit('SET_USER', user)

        alert('Your subscription has been renewed for another year.')
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

        return user
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            break

          case 'auth/wrong-password':
            break
          default:
        }
      }
    },

    async updateWallet({ commit }, { amount, transactionReference, paystackResponse }) {
      try {
        const newBalance = await new Promise((resolve, reject) => {
          const unsubscribe = onAuthStateChanged(auth, async (user) => {
    
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
            unsubscribe() // Unsubscribe from onAuthStateChanged after the update
            resolve(updatedWalletBalance)
          })
        })

        return newBalance
      } catch (error) {
        console.error('Error updating wallet:', error)
      }
    },
    

    async fetchWalletBalance({ commit }) {
      try {
        const newBalance = await new Promise((resolve, reject) => {
          const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
              reject(new Error('User not authenticated'))
              return
            }
    
            const userEmail = user.email
            const userQuery = query(collection(db, 'Users'), where('email', '==', userEmail))
            const querySnapshot = await getDocs(userQuery)
    
            if (querySnapshot.empty) {
              reject(new Error('User document not found'))
              return
            }
    
            const userData = querySnapshot.docs[0].data()
            const walletBalance = userData.walletBalance
    
            commit('SET_WALLET_BALANCE', walletBalance)
            unsubscribe() // Unsubscribe from onAuthStateChanged after fetching the balance
            resolve(walletBalance)
          })
        })
    
        return newBalance
      } catch (error) {
        console.error('Error fetching wallet balance:', error)
        return null
      }
    },
    

    async fetchWalletData({ commit }) {
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
        const walletData = userData.wallet || []

        commit('SET_WALLET_DATA', walletData)
        return walletData
      } catch (error) {
        console.error('Error fetching wallet data:', error)
        return null
      }
    },

 
    async changePlan({ commit }, { planId, amount, transactionReference, paystackResponse }) {
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
        const subscriptionPlan = userData.subscriptionPlan || {}
        let subscriptionPlanHistory = userData.subscriptionPlanHistory || []
        let userWalletBalance = userData.walletBalance || 0

        if (userWalletBalance < amount) {
          throw new Error('Insufficient wallet balance')
        }

        const planChange = {
          plan: planId,
          isPaid: true,
          timestamp: new Date().toISOString()
        }

        subscriptionPlanHistory.push(planChange)

        let theEndDate

        switch (planId) {
          case 1:
            theEndDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString()
            break

          case 2:
            theEndDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000).toISOString()
            break

          case 3:
            theEndDate = new Date(new Date().getTime() + 28 * 24 * 60 * 60 * 1000).toISOString()
            break
        }

        await updateDoc(userDoc, {
          subscriptionPlan: {
            ...subscriptionPlan,
            isPaid: true,
            amount: amount,
            planId: planId,
            startDate: new Date().toISOString(),
            endDate: theEndDate
          }, // Add startDate and endDate to subscriptionPlan
          wallet: arrayUnion({ amountAdded: amount, transactionReference, paystackResponse }),
          walletBalance: userWalletBalance - amount,
          subscriptionPlanHistory
        })

        if (planChange.isPaid) {
          await addDoc(collection(db, 'allsubscribers'), {
            email: userEmail,
            planId: planId,
            active: planChange.isPaid
          })
        }

        console.log('Subscription plan updated successfully')
        useToast().success({ body: 'Hello world', canTimeout: true });

        commit('CHANGE_PLAN', { planId, amount }) // Commit the mutation

        // Calculate the number of weeks paid
        // const now = new Date()
        // const startDate = new Date(subscriptionPlan.startDate)
        // const intervalsPassed = Math.floor(
        //   (now.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000)
        // )
        // let numberOfWeeksPaid = 0

        // for (let i = 0; i <= intervalsPassed; i++) {
        //   const currentDate = new Date(startDate.getTime() + i * 7 * 24 * 60 * 60 * 1000)
        //   const isActive = subscriptionPlanHistory.some((renewal) => {
        //     const renewalStartDate = new Date(renewal.startDate)
        //     const renewalEndDate = new Date(renewal.endDate)
        //     return (
        //       currentDate >= renewalStartDate && currentDate <= renewalEndDate && renewal.isPaid
        //     )
        //   })

        //   if (isActive) {
        //     numberOfWeeksPaid++
        //   }
        // }

        // console.log('Number of weeks paid:', numberOfWeeksPaid)
        // commit('SET_NUMBER_OF_WEEKS_PAID', numberOfWeeksPaid) // Commit the mutation for number of weeks paid
      } catch (error) {
        console.error('Error renewing plan:', error)
      }
    },

    async initAuth({ commit }) {
      try {
        commit('SET_LOADING', true)

        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log('User authenticated:', user)
            commit('SET_USER', {
              email: user.email
            })
          } else {
            console.log('User not authenticated')
            commit('SET_USER', null)
          }

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
