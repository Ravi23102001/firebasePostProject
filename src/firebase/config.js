import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCNyNnLN7P0wIpnn-i8GDVY9b7fuM7uyQM",
    authDomain: "learningfirbase-c15a7.firebaseapp.com",
    projectId: "learningfirbase-c15a7",
    storageBucket: "learningfirbase-c15a7.firebasestorage.app",
    messagingSenderId: "479397483701",
    appId: "1:479397483701:web:918900134fc5285dbe9afc",
    measurementId: "G-83RD52BLLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app)


// setPersistence(auth, browserLocalPersistence)
//   .then(() => {
//     console.log("Session persistence set to local storage.");
//     // Proceed with sign-in, for example:
//     // return signInWithEmailAndPassword(auth, email, password);
//   })
//   .catch((error) => {
//     console.error("Error setting persistence:", error);
//   });