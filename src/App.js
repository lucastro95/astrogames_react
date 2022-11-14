import "./App.css";

import React, { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import * as userActions from './redux/user/user-actions';

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import Routes from "./routes/Routes";

function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, snapShot =>
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      );
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => unsuscribe();
  }, [dispatch]);
  
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
