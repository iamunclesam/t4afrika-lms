import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { createStore } from "vuex";
import router from "../router";
import VuexPersistence from "vuex-persist";
import { toast } from "vue3-toastify";


const vuexLocal = new VuexPersistence({
  storage: window.localStorage, // You can change this to sessionStorage if needed
  key: 'movie-fusion', // Change this to a unique key for your app
  reducer: (state) => ({
    user: state.user, // Specify the state you want to persist
  }),
});

export default createStore({
  state: {
    user:null
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async register({ commit }, userDetails) {
      const {
    
        email, 
        username,
        password, 
        wallet: {
          added: [],
          withdrawn: []
        }
       } = userDetails;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);

        const user = {
            username,
            email
        };

        const usersCollection = collection(db, 'Users');
        await addDoc(usersCollection, user);

        commit('SET_USER', user);
        // router.push('/verify-email');
        // Display a success toast
       toast.success("Sign Up Successfull")

        return user;
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            toast.error("Email in Use")
            break

          case 'auth/invalid-email':
            toast.error("Invalid Email")
            break

          case 'auth/operation-not-allowed':
            toast.error("Operation not allowed")
            break

          case 'auth/weak-password':
            toast.error("Weak Password")
            break

          default:
            alert('Something went wrong')
        }

        return
        // Handle registration errors
      }
    },

    async login({ commit }, credentials) {
      const { email, password } = credentials;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = {
          email: userCredential.user.email,
        };
        commit('SET_USER', user);
        router.push('/')

        toast.success("Sign In Successfull")
        return user;
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-founded':
            toast.error("User doesn't exist")
            break

          case 'auth/wrong-password':
            toast.error('Wrong password')
            break
          default:
            // alert('Something went wrong')
        }
      }
    },

  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  plugins: [vuexLocal.plugin],
});
