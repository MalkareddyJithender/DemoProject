import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../css/signup.css';
import {db} from '../firebase/firestore';

export default function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpsw, setConfirmPsw] = useState("");
    const history = useHistory();
      
    // HandleChange method to update the states
    const handleChangeFName = (e) =>
     {
         setFirstName(e.target.value);
     }; 

     const handleChangeLName = (e) =>
     {
         setLastName(e.target.value);
     }; 

     const handleChangeEmail = (e) =>
     {
         setEmail(e.target.value);
     }; 

     const handleChangePhone = (e) =>
     {
         setNumber(e.target.value);
     }; 

     const handleChangePassword = (e) =>
     {
         setPassword(e.target.value);
     }; 

     const handleChangeConfirmPsw = (e) =>
     {
         setConfirmPsw(e.target.value);
     }; 

     const onSubmitButton = (e) =>
     {
        e.preventDefault();
        if(firstName === "")
        {
            alert("Enter First Name!");
            return;
        };
        if(lastName === "")
        {
            alert("Enter Last Name!");
            return;
        };
        if(email === "")
        {
            alert("Enter Email!");
            return;
        };
        if(number === "")
        {
            alert("Enter Phone Number!");
            return;
        };
        if(password === "")
        {
            alert("Enter Password!");
            return;
        };
        if(confirmpsw === "")
        {
            alert("Enter Confirm Password!");
            return;
        };
        const selectValue = document.getElementById("select").value;
        if(selectValue === "Select")
        {
            alert("Select User or Admin");
            return;
        }
        if(selectValue === "User")
        {
            
        db.collection('CompanyUsers').add({
            FirstName: firstName,
            LastName:lastName,
            EmailAddress: email,
            PhoneNumber:number,
            Password:password,
            Type:selectValue
          }).then(() =>
          {
            localStorage.setItem("PhoneNumber",number);
              history.push("/user-dashboard");
              setFirstName("");
              setLastName("");
              setEmail("");
              setNumber("");
              setPassword("");
              setConfirmPsw("");
          })
        }
        else if(selectValue === "Admin")
        {
            db.collection('Admins').add({
                FirstName: firstName,
                LastName:lastName,
                EmailAddress: email,
                PhoneNumber:number,
                Password:password,
                Type:selectValue
              }).then(() =>
              {
                  
                  history.push("/admin-dashboard");
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setNumber("");
                  setPassword("");
                  setConfirmPsw("");
              })
        }


     }
      
    return (
        <div className="App">
            <h3> Registration Form </h3><br />
            <form>
                <label>First Name</label>
                <input className="input" type="text" value={firstName} onChange={handleChangeFName}/>
                <label>Last Name</label>
                <input className="input" type="text" value={lastName} onChange={handleChangeLName}/>
                <label>Email Address</label>
                <input className="input" type="email" value={email} onChange={handleChangeEmail}/><br />
                <label>Select User/Admin</label>
                <select id="select">
                    <option>Select</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>
                <label>Phone No</label>
                <input className="input" type="number" value={number} onChange={handleChangePhone}/>
                <label>Password</label>
                <input className="input" type="password" value={password} onChange={handleChangePassword}/>
                <label>Confirm Password</label>
                <input className="input" type="password" value={confirmpsw} onChange={handleChangeConfirmPsw}/><br />
                <button className="btn" onClick={onSubmitButton}>
                    Register User
                </button>
            </form>
        </div>
    )
}