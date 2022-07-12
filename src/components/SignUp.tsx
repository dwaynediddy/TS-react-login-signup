import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface IFormInput {
    email: string
    name: string
    password: string
    passwordConfirmation: string
}

const SignUp = () => {
    const { register, getValues, handleSubmit } = useForm<IFormInput>()

    const [json, setJson] = useState<string>()

    const onSubmit = (data: IFormInput) => {
        setJson(JSON.stringify(data))
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Sign Up</h2>
            <label>Enter Email</label>
            <input 
                type="email" 
                {...register("email")}
                placeholder="Email" 
                required 
            />
            <label>Username</label>
            <input 
                type="name"
                {...register("name")} 
                placeholder="Username" 
                />
            <label>Enter Password</label> 
            <input 
                type="password"
                {...register("password", 
                {required: "Password is required"}
                )}
                placeholder="Password is required" 
                
            />
            <label>Confirm Password</label> 
            <input 
                type="password" 
                {...register("passwordConfirmation", {
                    required: "Please confirm your password",
                    validate: {
                        matchesPreviousPassword: (value: string) => {
                            const {password} = getValues()
                            return password === value || "Passwords don't match"
                        }
                    }
                })}

                placeholder="Password" 
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