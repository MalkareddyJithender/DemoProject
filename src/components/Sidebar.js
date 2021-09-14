import '../css/Sidebar.css';
import React from 'react';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import SmsIcon from '@material-ui/icons/Sms';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to="/dashboard">
                <div className="sidebar__content">
                    <DashboardOutlinedIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/buyers">
                <div className="sidebar__content">
                    <PermIdentityIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/invoices">
                <div className="sidebar__content">
                    <StarBorderIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <InsertChartIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <HomeIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <GroupIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <InsertChartIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <SettingsIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <HeadsetMicOutlinedIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <SmsIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content">
                    <MailOutlineIcon className="sidebar__icon" />
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className="sidebar__content2">
                    <ArrowForwardIosTwoToneIcon className="sidebar__icon2" />
                </div>
            </NavLink>
        </div>
    )
}

export default Sidebar;
