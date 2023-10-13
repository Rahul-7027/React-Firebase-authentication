import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../MyFireBaseData/Fire"
import 'firebase/auth';

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("");

    const auth = getAuth(app);
    auth.useDeviceLanguage();
    const login = () => {

        signInWithEmailAndPassword(auth, email, password).then((value) => console.log("Successfull Login")).catch((e) => console.log(1111, e))
    }
    return (
        <div className="login">
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="Email" required="" />
                <input type="password" onChange={(e) => setPass(e.target.value)} value={password} name="pswd" placeholder="Password" required="" />
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
