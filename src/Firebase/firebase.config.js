
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZmA8ms63_xl0bWh1n0I363wlh3DY7GHU",
  authDomain: "simple-react-authenticat-c6640.firebaseapp.com",
  projectId: "simple-react-authenticat-c6640",
  storageBucket: "simple-react-authenticat-c6640.appspot.com",
  messagingSenderId: "804884533990",
  appId: "1:804884533990:web:edc118b9a01c3cb8012127"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;