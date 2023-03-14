// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
   apiKey: "AIzaSyCOeMcpP9qoLGrNg6zLuxCd3QH6X9D2QOc",
   authDomain: "hotel-management-9bc84.firebaseapp.com",
   projectId: "hotel-management-9bc84",
   storageBucket: "hotel-management-9bc84.appspot.com",
   messagingSenderId: "680853619910",
   appId: "1:680853619910:web:2f70ae5ff2cd25e23043c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);