// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDlt_b6YRElJRLCUovwv4Xx2-H_O4ye3c4',
  authDomain: 'trade4afrika.firebaseapp.com',
  projectId: 'trade4afrika',
  storageBucket: 'trade4afrika.appspot.com',
  messagingSenderId: '572317837983',
  appId: '1:572317837983:web:8ec1686138b4fe61b890aa',
  measurementId: 'G-JEGRFB24X7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { auth, db, storage, }
