import './App.css';
//import { HomePage } from './components/HomePage';

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

export async function signIn() {
  let provider = new GoogleAuthProvider()
  await signInWithPopup(getAuth(), provider)
  console.log(getAuth())
}

/*export function App() {
  return (
    <>
      <HomePage />
    </>
  );
}*/