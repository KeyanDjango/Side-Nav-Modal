import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';

export default function NavigationSideBar() {
    return (
        <div className="navSideBar">

            <h3 style={{ marginLeft: 20, marginTop: 30 }}>React Pages</h3>

            <div className="navSideAllo">
                <NavLink to="/" exact className={({ isActive }) => (isActive ? "activeLink" : "nonactivelink")}>
                    < span >HOME</span>
                </NavLink >
                
                <NavLink to="/contact" exact className={({ isActive }) => (isActive ? "activeLink" : "nonactivelink")}>
                    < span >CONTACT</span>
                </NavLink >

                <NavLink to="/about" exact className={({ isActive }) => (isActive ? "activeLink" : "nonactivelink")}>
                    < span >ABOUT</span>
                </NavLink >

            </div>
           

        </div >
    )
}