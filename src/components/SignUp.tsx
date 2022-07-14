import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3-14}$/;
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const PASSWORD_REGEX = /^(?=.*)(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/;

interface signUpRequest {
    username: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const userRef = useRef<null | HTMLInputElement>(null)
    const errRef = useRef<null | HTMLParagraphElement>(null)

    const [ user, setUser ] = useState<string>('')
    const [ validName, setValidName] = useState<boolean>(false)
    const [ userFocus, setUserFocus] = useState<boolean>(false)

    const [ email, setEmail ] = useState<string>('')
    const [ validEmail, setValidEmail] = useState<boolean>(false)
    const [ emailFocus, setEmailFocus] = useState<boolean>(false)

    const [ pwd, setPwd] = useState<string>('')
    const [ validPwd, setValidPwd] = useState<boolean>(false)
    const [ pwdFocus, setPwdFocus] = useState<boolean>(false)

    const [ matchPwd, setMatchPwd] = useState<string>('')
    const [ validMatch, setValidMatch] = useState<boolean>(false)
    const [ matchFocus, setMatchFocus] = useState<boolean>(false)

    const [ errMsg, setErrMsg] = useState<string>('')
    const [ success, setSuccess] = useState<boolean>(false)

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        console.log(result)
        console.log(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PASSWORD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidPwd(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user,email, pwd, matchPwd])
 
  return (
    <section>
        <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'}>{errMsg}</p>
        <form noValidate>
            <h2>Sign Up</h2>
            <label 
                htmlFor='username'>
                    Username:
                    <span className={validName ? 'valid' : 'hide'}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? 'hide' : 'invalid'}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
            </label>
            <input 
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                required
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
            <p id='uidnote' className={userFocus && user && !validName ? 'instruction' : 'offscreen'}>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                4 to 14 characters.<br />
                must begin with letter <br />
                letters, numbers, underscores, hyphens allowed.
            </p>
            <label>Enter Password</label> 
            <input 
                type="password"                
                id='password'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                placeholder="Password is required"
                required
                
                />
            <label>Confirm Password</label> 
            <input 
                type="password"                
                id='password'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                placeholder="Password is required"
                required
            />
            <button>Submit</button>
            <div>Already have an Account?</div>
            <Link to="/login">
                <button>Login here</button>
            </Link>
        </form>
    </section>
  )
}

export default SignUp