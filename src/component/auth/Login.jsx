import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Firebase } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigat = useNavigate()
    const auth = getAuth(Firebase)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErr,setLoginError] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(`email ${email}, password ${password}`);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigat('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginError(errorMessage)
                setTimeout(() => {
                        setLoginError('')
                },5000);
            });
    }

    return (
        <>
            <div className='  main-Area '>

                <div className="card  col-md-3 col-10  box-area">
                    <div className="card-body">
                        <div className='d-flex flex-column align-items-center'>
                            {/* <source type="image/webp" srcset="https://statics.olx.in/external/base/img/loginEntryPointPost.webp" /> */}
                            <img src="https://statics.olx.in/external/base/img/loginEntryPointPost.png" className="topicon" alt="" />

                            <p className='text-center icon-text'>Help us become one of the safest places to buy and sell</p>
                        </div>
                        <div className='input-area '>
                            <form onSubmit={handleLogin}>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-3 mt-2' type="email" placeholder='Email' />
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className='px-3 mt-2' type="text" placeholder='Password' />
                                <button type='submit' className='postBtn mt-2'>Sign in</button>
                            </form>
                        </div>
                            <p className='text-danger text-center'>{loginErr}</p>
                        <hr />
                        <div>
                            <p style={{cursor:'pointer'}} className='text-center acText' onClick={()=>navigat('/signup')}>Create New Account</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login