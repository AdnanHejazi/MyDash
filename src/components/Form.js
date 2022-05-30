import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Form.css';
const Form = () => {
    const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [name, setName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

    // const [emailErr, setEmailErr] = useState(false);
    // const [passwordErr, setPasswordErr] = useState(false);
    // const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);
    // const [nameErr, setNameErr] = useState(false);

    // const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    // const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    // const validName = new RegExp('^[A-Za-z]{3, 40}$');
    let navigate = useNavigate()

    const validate = () => {
        // var errorMsg = document.getElementsByClassName('Form--error')
        // if(!validEmail.test(email)){
        //     return setEmailErr(true);
        // }
        // if(!validPassword.test(password)){
        //     setPasswordErr(true)
        // }
        // if(!validName.test(name)){
        //     setNameErr(true)
        // }
        // if(confirmPassword !== password){
        //     setConfirmPasswordErr(true)
        // }
        navigate('/bar-chart');
    }
    

    return (
        <div className='Form'>
            <h2 style={{color:'black'}}>Create an account</h2>
        
            <div className='Form__input-field'>
                <label htmlFor='email'>Your email address</label>
                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                {/* <span className='Form--error' style={{color:'red', display: emailErr ? 'block' : 'none'}}>Not a valid email!</span> */}
            </div>
            <div className='Form__input-field'>
                <label htmlFor='password'>Your password</label>
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {/* {(<span style={{color:'red', display: passwordErr ? 'block' : 'none'}}>Not a valid password format!</span>)} */}
            </div>
            <div className='Form__input-field'>
                <label htmlFor='confirmPassword'>Confirm your password</label>
                <input type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                {/* {(<span style={{color:'red', display: confirmPasswordErr ? 'block' : 'none'}}>Passwords don't match!</span>)} */}
            </div>
            <div className='Form__input-field'>
                <label htmlFor='name'>Your full name</label>
                <input type='name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                {/* {(<span style={{color:'red', display: nameErr ? 'block' : 'none'}}>Should be between 3-40 characters!</span>)} */}
            </div>
            <div className='Form__input-field'>
                <label htmlFor='phone'>Your phone number</label>
                <input type='number' name='phone' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
            </div>
            <div className='Form__checkbox'>
                <input type='checkbox'></input><p>I have read and agreed Terms and Conditions</p>
            </div>
                <button type='submit' onClick={validate}>Create account</button>
        </div>
    )
}

export default Form
