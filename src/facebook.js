import { signInWithPopup, FacebookAuthProvider , updateProfile} from "firebase/auth";
import { useState } from "react";
import { auth } from './firebase-config'


const provider = new FacebookAuthProvider();

export const useFacebook = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  

  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        updateProfile(user, {
          photoURL: user.photoURL + "?height=500&access_token=" + accessToken,
        }).then(() => {
        }).catch((error) => {
        });
        setUser({user, accessToken});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        setError(error);
      });
  }

  return {signIn, user, error}
  
}
