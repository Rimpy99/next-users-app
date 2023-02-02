'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { auth } from '../firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Home() {

  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  }

  return (
    <>
      <h1>CLICK BUTTON TO LOG IN</h1>
      <button onClick={login}>LOGIN</button>
    </>
  )
}
