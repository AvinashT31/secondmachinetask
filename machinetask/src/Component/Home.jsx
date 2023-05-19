import React from 'react'
import '../Styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const route = useNavigate();

    function openloginpage(){
        route('/register')
    }
    return (
        <div>
            <div id='navbar'>
                <div class='navitem'>
                    <p>LOGO</p>
                </div>
                <div class='navitem'>
                    <p>Home</p>
                </div>
                <div class='navitem'>
                    <p>Task</p>
                </div>
                <div onClick={openloginpage} class='navitem'>
                    <p>User</p>
                </div>
            </div>
        </div>
    )
}

export default Home;