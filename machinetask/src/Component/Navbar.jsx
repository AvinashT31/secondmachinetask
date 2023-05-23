import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const route = useNavigate();

    function openloginpage() {
        route('/login');
    }

    function taskpage(){
        route('/task');
    }

    function openhomepage() {

        var DataFromLS = JSON.parse(localStorage.getItem("currentuser"));
        console.log(DataFromLS, "DataFromLS");

        if (DataFromLS) {
            route('/home');
        }
        else {
            alert("login first");
            // route('/login');
        }
    }
    return (
        <div>
            <div id='navbar'>
                <div class='navitem'>
                    <p>LOGO</p>
                </div>
                <div onClick={openhomepage} class='navitem'>
                    <p>Home</p>
                </div>
                <div onClick={taskpage} class='navitem'>
                    <p>Task</p>
                </div>
                <div onClick={openloginpage} class='navitem'>
                    <p>User</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;