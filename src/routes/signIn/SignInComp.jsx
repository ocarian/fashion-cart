import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";

const SignInComp = () => {
  const redirectfn = async () => {
    const response = await getRedirectResult(auth);
    // console.log(response);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  };
  useEffect(() => {
    redirectfn();
  }, []);
  const logGogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      SignInComp
      <button onClick={logGogleUser}>signin with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        signin with google Redirect
      </button>
    </div>
  );
};

export default SignInComp;
