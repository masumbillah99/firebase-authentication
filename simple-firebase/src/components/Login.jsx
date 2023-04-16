import React from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSign = () => {
    console.log("clicke");
  };

  return (
    <div>
      <button onClick={handleGoogleSign}>Google login</button>
    </div>
  );
};

export default Login;
