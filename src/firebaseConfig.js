// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-JmT0EYACMWg-9Ge9JdA4nMGRssoPqoo",
  authDomain: "oscardanieldev-web-site.firebaseapp.com",
  projectId: "oscardanieldev-web-site",
  storageBucket: "oscardanieldev-web-site.firebasestorage.app",
  messagingSenderId: "432275761576",
  appId: "1:432275761576:web:65466a5ccc73586d8dd59d",
  measurementId: "G-XQR7E1LKHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
export default app;