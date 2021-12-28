import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase/firestore';
import { useHistory } from 'react-router-dom';
import '../css/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    const signIn = (e) =>
    {
        e.preventDefault();
        if(email === "")
        {
            alert("Enter Email!");
            return;
        };

        if(password === "")
        {
            alert("Enter Password!");
            return;
        };

        const selectValue = document.getElementById("select").value;
        if(selectValue === "Select")
        {
            alert("Select User or Admin");
            return;
        };
        if(selectValue === "User")
        {
            
        db.collection('CompanyUsers').where("EmailAddress","==",email)
        .get()
        .then((snapshot) =>
        {
            let DbPwd;
            let Numberr;
            snapshot.forEach((doc) =>
            {
                DbPwd = doc.data().Password;
                Numberr = doc.data().PhoneNumber;
                console.log(DbPwd);
                console.log(password);
                if(DbPwd === password)
                {
                    localStorage.setItem("PhoneNumber",Numberr);
                    history.push("/user-dashboard");
                    setEmail("");
                    setPassword("");
                }
            });


        })
        }
        else if(selectValue === "Admin")
        {
            db.collection('Admins').where("EmailAddress","==",email)
            .get()
            .then((snapshot) =>
            {
                let DbPwd;
                console.log(DbPwd);
                console.log(password);
                snapshot.forEach((doc) =>
                {
                    DbPwd = doc.data().Password;
                    if(DbPwd === password)
                    {
                        history.push("/admin-dashboard");
                        setEmail("");
                        setPassword("");
                    }
                });
    
    
            })
        }
        
    };

    // const register = (e) =>
    // {
    //     e.preventDefault();

    //     auth
    //     .createUserWithEmailAndPassword(email,password)
    //     .then((userCredentials) =>
    //     {
    //         if(userCredentials)
    //         {
    //         history.push("/");
    //         }
    //     })
    //     .catch((error) =>
    //     {
    //         alert(error.message);
    //     })
    // }

    return (
        <div className="login">
             <div className="login__container">
                 <h1>Sign-in</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input 
                     type="text" 
                     placeholder="E-mail"
                     value={email}
                     onChange = {(e) =>
                    {
                        setEmail(e.target.value); 
                    }}
                     />
                     <h5>Type</h5>
                     <select id="select" className="selectt">
                       <option>Select</option>
                       <option>Admin</option>
                       <option>User</option>
                    </select>


                     <h5>Password</h5>
                     <input 
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) =>
                    {
                        setPassword(e.target.value);
                    }}
                      />

                     <button 
                     className="login__signInButton"
                     onClick={signIn}
                     >Sign In</button>
                 </form>
             </div>
        </div>
    )
}

export default Login;
