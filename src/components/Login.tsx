import { useState, useRef, useEffect }from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
        <form>
            <h2>Login</h2>
            <label>Username</label>
            <input 
                name="username" 
                required
            />
            <label>Password</label>
            <input 
                type="password"

                required
            />
            <button>Login</button>
            <div>Dont have an account?</div>
            <Link to="/signup">
                <button>sign up here</button>
            </ Link>
            <div>Forgot your password</div>
            <button>Reset Password</button>
        </form>
    </section>
  )
  
}
export default Login