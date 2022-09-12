import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIhB9V1DTnoKIKqDqttapzzkA9lgmlS6o",
  authDomain: "agendamento-md-ad472.firebaseapp.com",
  projectId: "agendamento-md-ad472",
  storageBucket: "agendamento-md-ad472.appspot.com",
  messagingSenderId: "1020749839233",
  appId: "1:1020749839233:web:738de33df70f536f378680",
  measurementId: "G-2XB30GLW8C"
};

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };

export const firebase = initializeApp(firebaseConfig);

// export const auth = getAuth(firebase)