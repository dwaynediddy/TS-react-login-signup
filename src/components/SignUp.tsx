import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3-14}$/;
const PASSWORD_REGEX = /^(?=.*)(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/;

const SignUp = () => {

  return (
    <div>
        <form noValidate>
            <h2>Sign Up</h2>
            <label>Enter Email</label>
            <input 
                type="email" 
                
                placeholder="Email" 
                required 
            />
            <label>Username</label>
            <input 
                type="name"
                placeholder="Username" 
                />
            <label>Enter Password</label> 
            <input 
                type="password"                
                placeholder="Password is required"
                required
                
            />
            <label>Confirm Password</label> 
            <input 
                type="password" 
                placeholder="Confirm Password" 
            />
            <button>Submit</button>
            <div>Already have an Account?</div>
            <Link to="/login">
                <button>Login here</button>
            </Link>
        </form>
    </div>
  )
}

export default SignUp