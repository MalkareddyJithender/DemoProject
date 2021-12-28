import '../css/DashboardPage.css';
import React,{useEffect,useState} from 'react';
import {db} from '../firebase/firestore';
import firebase from 'firebase';

function DashboardPage() {
           const [users,setUsers] = useState([]);
            //component Did Mount

            useEffect(() =>
            {
                const num = localStorage.getItem("PhoneNumber")
                db.collection("CompanyUsers")
                .where("PhoneNumber","==",num)
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
            // useEffect(() =>
            // {
            //     //setting(inserting) data1
            //     db.collection("persons").doc("jithu").set({
            //         name:"Jithender",
            //         age:21,
            //         visitedCities:["hyderabad","nellore","nizamabad","rangareddy"],
            //         workspace:{
            //             company:"VNB",
            //             place:"begampet"
            //         },
            //         work:null
            //     })
            //      .then((doc) =>
            //      {
            //         alert("data1 successfully created!");
            //         //setting data2
            //         return db.collection("persons").doc("rohith").set({
            //                name:"rohith.G",
            //                age:22,
            //                visitedCities:["bhainsa","nirmal","nizamabad","rangareddy"],
            //                workspace:{
            //                 company:"amazon",
            //                 place:"hyderabad"
            //                },
            //                work:null
            //             });
            //      })
            //      .then((doc) =>
            //      {
            //         alert("data2 successfully created!");
            //         return db.collection("persons").doc("vamsi").set({
            //             name:"vamsi.K",
            //             age:21,
            //             visitedCities:["nellore","hyderabad","kavali","rangareddy"],
            //             workspace:{
            //              company:"tcs",
            //              place:"hyderabad"
            //             },
            //             work:null
            //          })
            //          .then((doc) =>
            //          {
            //              alert("data3 successfully created!");
            //          })
            //      })
            //      .catch((e) =>
            //      {
            //         console.log('error',e);
            //      });
                 

            // //reading the data
            //     //reading single document from collection   
            //      db.collection("persons")
            //        .doc("rohith")
            //        .get()
            //        .then((doc) =>
            //        {
            //         console.log(doc.id, "==>", doc.data());
            //        })
            //        .catch((error) =>
            //        {
            //            console.log("error getting document!",error);
            //        });
            //     //reading some documents from collection
            //     db.collection("persons")
            //       .where("age", "==", 21)
            //       .get()
            //       .then((querySnapshot) =>
            //       {
            //         querySnapshot.forEach((doc) =>
            //         {
            //             console.log("getting some docs!")
            //             console.log(doc.id, "===>", doc.data());
            //         })
            //       })
            //       .catch((error) =>
            //        {
            //            console.log("error getting documents!",error);
            //        });
            //     // reading all documents from collection
            //     db.collection("persons")
            //       .get()
            //       .then((querySnapshot) =>
            //       {
            //         querySnapshot.forEach((doc) =>
            //         {
            //             console.log("getting all docs");
            //             console.log(doc.id, "===>", doc.data());
            //         })
            //       })
            //       .catch((error) =>
            //        {
            //            console.log("error getting documents from collections!",error);
            //        });
            // // deleting the documents
            //     //delete document from collection
            //     db.collection("persons")
            //       .doc("jithu")
            //       .delete()
            //       .then(() =>
            //       {
            //           console.log("document successfully deleted!");
            //       })
            //       .catch((error) =>
            //       {
            //         console.log("error occurred!",error);
            //       });
            //     //delete field within a document
            //     const document = db.collection("persons").doc("vamsi")
            //     const removedWorkspace = document.update({
            //           visitedCities:firebase.firestore.FieldValue.delete()
            //       });
            // //updating the document
            //     db.collection("persons")
            //       .doc("rohith")
            //       .update({
            //           age:25
            //       });

            // },[]);

    return (
        <div className="dashboard">
           <h2>This is the User dashboard page...</h2><br />
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

export default DashboardPage;
