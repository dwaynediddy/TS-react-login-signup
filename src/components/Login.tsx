import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'
// matching where it will go in the backend
const LOGIN_URL = '/'

const Login = () => {
    const { setAuth } = useContext<any>(AuthContext)
    const userRef = useRef<null | HTMLInputElement>(null)
    const errRef = useRef<null | HTMLParagraphElement>(null)

    const [ user, setUser ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ errMsg, setErrMsg ] = useState<string>('')
    const [ success, setSuccess ] = useState<boolean>(false)

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, password])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, password}),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken
            setAuth({ user, password, accessToken})
            setUser('')
            setPassword('')
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg(err("no server response"))
            } else if (err.response === 400) {
                setErrMsg('no username or password')
            } else if (err.response === 401) {
                setErrMsg('login failed')
            }
            errRef.current?.focus()
        }
        setSuccess(true)
    }

  return (
    <>
    {success ? (
         <section>
            <h3>You are logged in!</h3>
            <br/>
            <Link to='/profile'>Profile</Link>
         </section>
    ) : (

        <section>
            <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor='username'>Username</label>
                <input 
                    type="text"
                    id="username" 
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    />
                <label>Password</label>
                <input 
                    type="password"
                    id="password"
                    autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    />
                <button>Login</button>
                <div>Dont have an account?</div>
                <Link to="/signup">
                    <p>Sign Up</p>
                </ Link>
                <p>Forgot your password</p>
                <Link to="#">
                    <p>Reset Password</p>
                </Link>
            </form>
        </section>
        )}
    </>
  )
  
}
export default Login