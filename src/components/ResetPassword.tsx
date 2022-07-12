import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface IFormInput {
    email: string;
    newPassword: string;
    confirmNewPassword: string;
}

const ResetPassword = () => {

    const { register, handleSubmit } = useForm<IFormInput>()

    const [json, setJson ] = useState<string>()

    const onSubmit = (data: IFormInput) => {
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Reset Password</h2>
            <label>Email Adress</label>
            <input 
                type="email"
                {...register("email")}
            />
            <label>New Password</label>
            <input 
                type="password" 
                {...register("newPassword")}
            />

            <label>Confirm New Password</label>
            <input 
                type="password" 
                {...register("confirmNewPassword")}
            />
        </form>
    </div>

  )
}

export default ResetPassword