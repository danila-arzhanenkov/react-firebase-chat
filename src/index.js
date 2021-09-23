import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPnQohEOYbyNKaa9Nh9ajb_9n_VZaO_lw",
  authDomain: "react-chat-4cd64.firebaseapp.com",
  projectId: "react-chat-4cd64",
  storageBucket: "react-chat-4cd64.appspot.com",
  messagingSenderId: "150386714249",
  appId: "1:150386714249:web:67102e0e252f99f7abc858",
  measurementId: "G-HVBKMY5MGK"
};

export const app = initializeApp(firebaseConfig);

export const Context = createContext(null);
export const auth = getAuth();
const firestore = getFirestore();

ReactDOM.render(
  <Context.Provider value={
    {
      app,
      auth,
      firestore
    }
  }>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
);

