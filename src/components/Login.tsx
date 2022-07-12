import { useState, useRef, useEffect }from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface IFormInput {
    username: string
    email: string
    password: string
}

const Login = () => {
    const {register, handleSubmit} = useForm<IFormInput>()
    const userRef = useRef()
    const errRef = useRef()
    
    const [user, setUser] = useState<string>()
    const [pwd, setPwd] = useState<string>()
    const [errMsg, setErrMsg] = useState<string>()User


    const onSubmit = (data: IFormInput) => {
        console.log(data)
    }

  return (
    <main>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <label>Username</label>
            <input 
                type="username"
                {...register("username")}
                name="username" 
                placeholder="Username" 
            />
            <label>Password</label>
            <input 
                type="password"
                {...register("password")}
            />
            <button>Login</button>
            <div>Dont have an account?</div>
            <Link to="/signup">
                <button>sign up here</button>
            </ Link>
            <div>Forgot your password</div>
            <button>Reset Password</button>
        </form>
    </main>
  )
}

export default Login