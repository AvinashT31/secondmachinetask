import React, { useState } from 'react'

const Forgetpass = () => {

    const [forgetpass, setforgetpass] = useState({ username: "" });
    console.log(forgetpass, "forgetpass")

    const [newfield, setnewfield] = useState();
    console.log(newfield, "newfield")

    function changepass(e) {

        e.preventDefault()

        var DataFromLS = JSON.parse(localStorage.getItem("machinetaskDB"));
        console.log(DataFromLS, "DataFromLS");

        var currentuser = JSON.parse(localStorage.getItem("currentuser"));
        console.log(currentuser, "currentuser")

        var flag = false;

        for (var i = 0; i < DataFromLS.length; i++) {
            if (DataFromLS[i].username === currentuser.username) {
                flag = true;
            }
        }
        if (flag) {
            setnewfield(currentuser.username);
            alert("set a new password")
        }
        else {
            alert("username not matched");
        }
    }

    function handlclick(e) {
        setforgetpass({ ...forgetpass, username: e.target.value })
    }

    const [newpassword, setnewpassword] = useState({ password: "" });
    console.log(newpassword, "newpassword");

    function clickhandle(e) {
        setnewpassword({ ...newpassword, password: e.target.value })
    }

    function changepassword(e) {

        e.preventDefault();
        var DataFromLS = JSON.parse(localStorage.getItem("machinetaskDB"));

        var currentuser = JSON.parse(localStorage.getItem("currentuser"));

        var flag = false;

        for (var i = 0; i < DataFromLS.length; i++) {
            if (DataFromLS[i].username === currentuser.username) {
                flag = true;
                break;
            }
        }
        if (flag) {
            DataFromLS[i].password = newpassword.password;
            localStorage.setItem("machinetaskDB", JSON.stringify(DataFromLS));
            alert("password change succesffully");
        }

    }

    return (
        <div>
            <form>
                <label>Username</label>
                <input onChange={(e) => handlclick(e)} name='username' value={forgetpass.username} type="email" placeholder='' />
                <br />
                <button onClick={(e) => changepass(e)}>submit</button>
            </form>
            {newfield && (<div>
                <form>
                    <label>Password</label>
                    <input onChange={(e) => clickhandle(e)} name='password' type="password" placeholder='' />
                    <br />
                    <button onClick={(e) => changepassword(e)}>submit</button>
                </form>
            </div>)}
        </div>
    )
}

export default Forgetpass


// import React, { useState } from 'react';

// const Forgetpass = () => {
//   const [forgetpass, setForgetpass] = useState({ username: '' });
//   const [newfield, setNewfield] = useState(false);
//   const [newPassword, setNewPassword] = useState('');

//   function changepass(e) {
//     e.preventDefault();

//     const DataFromLS = JSON.parse(localStorage.getItem('machinetaskDB'));
//     const currentuser = JSON.parse(localStorage.getItem('currentuser'));

//     const foundUser = DataFromLS.find(
//       (user) => user.username === currentuser.username
//     );

//     if (foundUser) {
//       setNewfield(true);
//       alert('Set a new password');
//     } else {
//       alert('Username not found');
//     }
//   }

//   function handlclick(e) {
//     setForgetpass({ username: e.target.value });
//   }

//   function clickhandle(e) {
//     setNewPassword(e.target.value);
//   }

//   function changepassword(e) {
//     e.preventDefault();

//     const DataFromLS = JSON.parse(localStorage.getItem('machinetaskDB'));
//     const currentuser = JSON.parse(localStorage.getItem('currentuser'));

//     const foundUserIndex = DataFromLS.findIndex(
//       (user) => user.username === currentuser.username
//     );

//     if (foundUserIndex !== -1) {
//       DataFromLS[foundUserIndex].password = newPassword;
//       localStorage.setItem('machinetaskDB', JSON.stringify(DataFromLS));
//       alert('Password changed successfully');
//     }
//   }

//   return (
//     <div>
//       <form>
//         <label>Username</label>
//         <input
//           onChange={(e) => handlclick(e)}
//           name="username"
//           value={forgetpass.username}
//           type="email"
//           placeholder=""
//         />
//         <br />
//         <button onClick={(e) => changepass(e)}>Submit</button>
//       </form>
//       {newfield && (
//         <div>
//           <form>
//             <label>New Password</label>
//             <input
//               onChange={(e) => clickhandle(e)}
//               name="password"
//               type="password"
//               placeholder=""
//             />
//             <br />
//             <button onClick={(e) => changepassword(e)}>Submit</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Forgetpass;



