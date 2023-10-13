import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../MyFireBaseData/Fire"
import 'firebase/auth';

// import "firebase"




const SinInPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("");
    const [name, setName] = useState("")

    const auth = getAuth(app);
    auth.useDeviceLanguage();


    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((value) => alert("Create User SuccessFuly")).catch((e) => alert(e))
    }
    const login = () => {

        signInWithEmailAndPassword(auth, email, password).then((value) => alert("Successfull Login")).catch((e) => alert(1111, e))
    }
    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="txt" placeholder="User name" required="" />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="Email" required="" />
                    <input type="password" onChange={(e) => setPass(e.target.value)} value={password} name="pswd" placeholder="Password" required="" />
                    <button onClick={createUser}>Sign up</button>
                </form>
            </div>

            <div className="login">
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="Email" required="" />
                    <input type="password" onChange={(e) => setPass(e.target.value)} value={password} name="pswd" placeholder="Password" required="" />
                    <button onClick={login}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SinInPage
