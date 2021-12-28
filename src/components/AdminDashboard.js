import '../css/DashboardPage.css';
import React,{useEffect,useState} from 'react';
import {db} from '../firebase/firestore';

function AdminDashboardPage() {
    const [users,setUsers] = useState([]);

            //component Did Mount
            useEffect(() =>
            {
                db.collection("CompanyUsers")
                .onSnapshot((snapshot) =>
                {
                    var content = [];
                    snapshot.forEach((doc) =>
                    {
                        content.push(doc.data());
                    });
                    setUsers(content);
                })
            },[]);

    return (
        <div className="dashboard">
            <h2>This is the Admin dashboard page...</h2><br />
            <table id="users">
                <tr>
                <th>sl.no.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone Number</th>
                <th>Type</th>
                </tr>

            {users.map((item,i) =>
            {
                return (
                <tr>
                <td>{i+1}</td>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.EmailAddress}</td>
                <td>{item.Password}</td>
                <td>{item.PhoneNumber}</td>
                <td>{item.Type}</td>
                </tr>
                )
            })}
          </table>
        </div>
    )
}

export default AdminDashboardPage;
