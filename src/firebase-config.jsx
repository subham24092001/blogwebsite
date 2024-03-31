import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaNYlQikMoCkEQvpxdB7vGrwaj17ijruQ",
  authDomain: "blogprj-f12ef.firebaseapp.com",
  projectId: "blogprj-f12ef",
  storageBucket: "blogprj-f12ef.appspot.com",
  messagingSenderId: "894702075508",
  appId: "1:894702075508:web:ec83be175de8dfa3d99b21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db  = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();