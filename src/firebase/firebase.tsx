import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuQiWxZ98QhKcVCxIx9UjxXzr0fmHsPKo",
  authDomain: "kugoo-project.firebaseapp.com",
  projectId: "kugoo-project",
  storageBucket: "kugoo-project.appspot.com",
  messagingSenderId: "41209374019",
  appId: "1:41209374019:web:c765aa2cda5a902150fbf6",
  measurementId: "G-BSFXG4JMBS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export enum authErrors {
  "auth/weak-password" = "Пароль не должен быть меньше шести символов",
  "auth/user-not-found" = "Неправильный email!",
  "auth/email-already-in-use" = "Такой email уже существует!",
  "auth/wrong-password" = "Неправильный пароль!",
  "auth/invalid-email" = "Неправильный email!",
  "auth/email-already-exists" = "Такой email уже существует!",
}
