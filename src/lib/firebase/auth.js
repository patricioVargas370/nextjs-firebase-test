import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  onIdTokenChanged as _onIdTokenChanged,
} from "firebase/auth";

import { auth } from "@/src/lib/firebase/clientApp";

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged;
}

export function onIdTokenChanged(cb) {
  return _onIdTokenChanged;
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  }
  catch(error) {
    console.log("Error signing in with Google", error);

  }
}

export async function signOut() {
  
  try {
    return auth.signOut();
  } catch (error) {
    console.log("Error signing out with Google", error);
  }
}
