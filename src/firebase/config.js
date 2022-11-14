import { initializeApp } from "firebase/app";
import { getFirestore,
         serverTimestamp,
         collection,
         addDoc,
         onSnapshot,
         query,
         orderBy } from "firebase/firestore"

import { getAuth,
         createUserWithEmailAndPassword,
         updateProfile,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuAxd8agsMNL9hbqhdQ22i5-AfFKFYpSc",
  authDomain: "live-chat-vuejs-37943.firebaseapp.com",
  projectId: "live-chat-vuejs-37943",
  storageBucket: "live-chat-vuejs-37943.appspot.com",
  messagingSenderId: "460737740660",
  appId: "1:460737740660:web:5e3816d322ade365ebf621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)


export { db
        ,auth
        ,createUserWithEmailAndPassword
        ,updateProfile
        ,signInWithEmailAndPassword
        ,signOut
        ,onAuthStateChanged
        ,serverTimestamp
        ,collection
        ,addDoc
        ,onSnapshot
        ,query
        ,orderBy
}