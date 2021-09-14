import '../css/Profile.css';
import React from 'react';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__header">
                <div>
                <NavLink className="profile__firstHeading" to="/profile">
                    <PersonOutlineTwoToneIcon className="profile__headingImage" />
                    <h2 className="profile__heading">Manage Users</h2>
                </NavLink> 
                </div>
                <NavLink className="profile__secondHeading"  to="/profile">    
                    <h3>User Creation</h3>
                </NavLink>  
                <NavLink className="profile__thirdHeading"  to="/profile">    
                    <h3> Manage Users </h3>
                </NavLink> 
            </div>
            <div className="profile__body">
                <div className="profile__headers">
                <div className="profile__header__left">
                <NavLink to="#">Manage Users</NavLink>
                <NavLink to="#"> Finder Details </NavLink>
                <NavLink to="#"> Advertiser Details </NavLink>
                </div>
                <div className="profile__header__right">
                    <input type="search" placeholder="search" />
                </div>
                </div>
                <div className="profile__details">
                    <div className="profile__detailsHeader">
                    <p>username</p>
                    <p>chat history</p>
                    <p>block</p>
                    <p>hide</p>
                    <p>Action</p>
                    </div>
                    <div className="profile__detailsBody">
                        <div className="profile__user">
                            <Avatar src="https://bestprofilepix.com/wp-content/uploads/2014/08/new-stylish-boys-facebook-DPs-photos-.jpg" />
                            <h3 className="profile__user">M.Jithender</h3>
                        </div>
                        <p>group chat </p>
                        <p>box</p>
                        <p>box</p>
                        <div className="icons">
                        <VisibilityIcon />
                        <DeleteIcon />
                        </div>
                    </div>
                    <div className="profile__detailsBody">
                        <div className="profile__user">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_98A9N50n4NG408HNX4ka6wqSO2jXCWwtNQ&usqp=CAU" />
                            <h3 className="profile__user">M.Jithender</h3>
                        </div>
                        <p>group chat </p>
                        <p>box</p>
                        <p>box</p>
                        <div>
                        <VisibilityIcon />
                        <DeleteIcon />
                        </div>
                    </div>
                    <div className="profile__detailsBody">
                        <div className="profile__user">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnaNZ5DtUOjv8eq3wYa7dl_TScURfBiQPTA&usqp=CAU" />
                            <h3 className="profile__user">M.Jithender</h3>
                        </div>
                        <p>group chat</p>
                        <p>box</p>
                        <p>box</p>
                        <div>
                        <VisibilityIcon />
                        <DeleteIcon />
                        </div>
                    </div>
                    <div className="profile__detailsBody">
                        <div className="profile__user">
                            <Avatar src="https://www.trickscity.com/wp-content/uploads/2016/11/Stylish-And-Modern-Baby-Boys-Profile-Pictures-DP-For-Facebook-745x1024.jpg" />
                            <h3 className="profile__user">M.Jithender</h3>
                        </div>
                        <p>group chat </p>
                        <p>box</p>
                        <p>box</p>
                        <div>
                        <VisibilityIcon />
                        <DeleteIcon />
                        </div>
                    </div>
                    <div className="profile__detailsBody">
                        <div className="profile__user">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhWKzXAiRkTeNALMlFpc4sWSMro760qPhtg&usqp=CAU" />
                            <h3 className="profile__user">M.Jithender</h3>
                        </div>
                        <p>group chat </p>
                        <p>box</p>
                        <p>box</p>
                        <div>
                        <VisibilityIcon />
                        <DeleteIcon />
                        </div>
                    </div>
                    <div className="profile__detailsBody">
                        <div className="profile__user">
                            <Avatar src="https://www.tricksclub.com/wp-content/uploads/2018/05/Boy-Facebook-DP.png" />
                            <h3 className="profile__user">M.Jithender</h3>
                        </div>
                        <p>group chat</p>
                        <p> box </p>
                        <p>box</p>
                        <div>
                        <VisibilityIcon />
                        <DeleteIcon />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
