import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
function Login() {
    const signIn = () => {};
    return (
        <div className='login'>
            <div className="login__container">
                <img 
                    src=""
                    alt=""/>
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>

            </div>
        </div>
    )
}

export default Login
