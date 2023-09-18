
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0EPyVO0HWMmpzH-1APvs4IncXLndrpyg",
  authDomain: "web3camera.firebaseapp.com",
  projectId: "web3camera",
  storageBucket: "web3camera.appspot.com",
  messagingSenderId: "919005738400",
  appId: "1:919005738400:web:7d8bc4fde016bb24e7e0c5",
  measurementId: "G-DB8M6BCPT1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(profilePic);
      console.log(name);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.reload(true)
    })
    .catch((error) => {
      console.log(error);
    });
};