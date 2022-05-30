import React from 'react'
import calender from '../calender.svg';
import Form from './Form';
import '../css/Login.css'

const Login = () => {
    return (
        <div className='Home-page'>
      <div className='Container'>
        <img src={calender} alt='logo' className='Calender'></img>
        <Form />
      </div>
    </div>
    )
}

export default Login
