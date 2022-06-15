import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey:"AIzaSyCb-vduWN6inzzCgfOKVsaWXVgkfgBbxDo",
  authDomain: "homemassagerwanda-6025f.firebaseapp.com",
  projectId: "homemassagerwanda-6025f",
  storageBucket: "homemassagerwanda-6025f.appspot.com",
  messagingSenderId: "547491717752",
  appId: "1:547491717752:web:50ce892eb0e74e0514c38d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);

