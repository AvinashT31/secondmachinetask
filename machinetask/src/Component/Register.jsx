import React, { useState } from 'react'
import '../Styles/Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [registerData, setregisterData] = useState({username:"", password:""});
    console.log(registerData, "registerData");

    const route = useNavigate();

    function Register(e) {
        e.preventDefault();
        // alert("working");

        var DataFromLS = JSON.parse(localStorage.getItem("machinetaskDB")) || [];
        console.log(DataFromLS, "DataFromLS")

        var flag = false;

        for(var i=0; i< DataFromLS.length; i++){
                if(DataFromLS[i].username === registerData.username){
                    flag =true;
                }
        }
        if(flag){
            alert("username is already present")
        }
        else if(registerData.username.length < 1 && registerData.password.length < 1){
            alert("must fill all field")
        }
        else if(registerData.password.length < 8){
            alert("password must have 8 digits");
        }
        else{
            DataFromLS.push(registerData);
            localStorage.setItem("machinetaskDB", JSON.stringify(DataFromLS));
            setregisterData({username:"", password:""});
            route('/login')
            alert("Register Successfully")
        }
    }

    function handleclick(e) {
        // console.log(e);
        var name = e.target.name;
        var value = e.target.value;
        setregisterData({...registerData, [name]: value})
    }

    function openloginpage(){
        route('/login');
    }

    return (
        <div id='registerfullpage'>
            <form>
                <label>Username</label>
                <input onChange={(e) => handleclick(e)} name='username' value={registerData.username} type="email" placeholder='' />
                <br />
                <label>Password</label>
                <input onChange={(e) => handleclick(e)} name='password' value={registerData.password} style={{ position: "relative", left: "9%" }} type="password" placeholder='' />
                <br />
                <button onClick={(e) =>Register(e)}>Register</button>
                <button onClick={openloginpage}>login</button>
            </form>
        </div>
    )
}

export default Register