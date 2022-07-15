import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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

    // useEffect(() => {
    //     const result = EMAIL_REGEX.test(email)
    //     console.log(result)
    //     console.log(email)
    //     setValidEmail(result)
    // }, [email])

    useEffect(() => {
        setValidPwd(PASSWORD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])
 
  return (
    <section>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
        <form noValidate>
            <h2>Sign Up</h2>
            <label 
                htmlFor='username'>
                    Username:
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
            </label>
            <input 
                type='text'
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validName ? 'false' : 'true'}
                value={user}
                aria-describedby='uidnote'
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                required
            />
            <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'} aria-live="assertive">
                <FontAwesomeIcon icon={faInfoCircle} /> 
                 4 to 14 characters.<br />
                must begin with letter <br />
                letters, numbers, underscores, hyphens allowed.
            </p>

            {/* password field */}
            <label htmlFor='password'>Enter Password</label> 
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
            <input 
                type="password"                
                id='password'
                autoComplete='off'
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                placeholder="Password is required"
                required
            />
            <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'} aria-live="assertive">
                <FontAwesomeIcon icon={faInfoCircle} /> 
                8 to 24 characters. <br />
                must include uppercase lowercase letters, number and special character <br />
            </p>


            <label>Confirm Password</label> 
            <input 
                type="password"                
                id='confirmPassword'
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