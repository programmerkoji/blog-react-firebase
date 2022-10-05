import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB1g4_XTk9FgyiFNTW_wv0opxZdPtKXtdY",
	authDomain: "blog-a1326.firebaseapp.com",
	projectId: "blog-a1326",
	storageBucket: "blog-a1326.appspot.com",
	messagingSenderId: "317330889223",
	appId: "1:317330889223:web:078e9909c2f8f824cba8a2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
