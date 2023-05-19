import React, { useState } from 'react'
import '../Styles/Login.css'
import { route, useNavigate } from 'react-router-dom';

const Login = () => {

  const [loginData, setloginData] = useState({ username: "", password: "" });
  console.log(loginData, loginData);

  const route = useNavigate();

  function login(e) {

    e.preventDefault()

    var DataFromLS = JSON.parse(localStorage.getItem("machinetaskDB"));
    console.log(DataFromLS, "DataFromLS");

    var flag = false;
    var currentuser;

    for (var i = 0; i < DataFromLS.length; i++) {
      if (DataFromLS[i].username === loginData.username && DataFromLS[i].password === loginData.password) {
        flag = true;
        currentuser = DataFromLS[i];
      }
    }
    console.log(flag, "flag")
    if(flag){
      localStorage.setItem("currentuser", JSON.stringify(currentuser));
      setloginData({ username: "", password: "" });
      alert("login successfully")
    }
    else{
      setloginData({ username: "", password: "" });
      alert("please check your credentials")
    }

  }

  function handlclick(e){
      var name = e.target.name;
      var value = e.target.value;
      setloginData({...loginData, [name]: value});
  }

  function singlepage(e){
    e.preventDefault();
    // alert("working");
    route('/register');
  }

  
  return (
    <div id='Loginfullpage'>
      <form>
        <label>Username</label>
        <input onChange={(e) => handlclick(e)} name='username' value={loginData.username} type="email" placeholder='' />
        <br />
        <label>Password</label>
        <input style={{ position: "relative", left: "9%" }} onChange={(e) => handlclick(e)} name='password' value={loginData.password} type="password" placeholder='' />
        <br />
        <button>Change Password</button>
        <button onClick={(e) =>login(e)}>Login</button>
        <button onClick={(e) => singlepage(e)}>Register</button>
      </form>
    </div>
  )
}

export default Login