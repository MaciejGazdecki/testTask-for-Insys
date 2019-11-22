import React from 'react';
import {NavLink} from "react-router-dom"
import styles from "./navigation.modules.scss"

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <div className={styles.avatar}></div>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to="/">
                            <i className="far fa-user-circle"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">
                            <i className="far fa-image"></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;