import React, { useState } from 'react'
import '../Styles/Login.css'

const Login = () => {

    const[loginData, setloginData] = useState();
    console.log(loginData, loginData);

    function login(){

    }
  return (
    <div id='Loginfullpage'>
        <form>
            <label>Username</label>
            <input type="text" placeholder='' />
            <br />
            <label>Password</label>
            <input style={{position:"relative",left:"9%"}} type="password" placeholder='' />
            <br />
            <button>Change Password</button>
            <button onClick={login}>Login</button>
        </form>
    </div>
  )
}

export default Login