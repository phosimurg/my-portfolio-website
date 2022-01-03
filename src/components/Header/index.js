import React from 'react';
import './Header.scss'
import {FaAngleRight} from 'react-icons/fa';


const Header = () => {
    return <nav className="navbar navbar-expand-lg header-main">
        <div className="container-fluid header-in-container container">
            <div>
                <a className="navbar-brand navbar-title" href="/">Ahmet YILDIZ</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">X</span>
                </button>
            </div>
            <div className="collapse navbar-collapse navbar-item-container" id="navbarNav">
                <ul className=" navbar-list">
                    <li className="nav-item navbar-list-item">
                        <a className="nav-link navbar-link" href="#">About</a>
                    </li>
                    <li className="nav-item navbar-list-item">
                        <a className="nav-link navbar-link" href="#">Skills</a>
                    </li>
                    <li className="nav-item navbar-list-item">
                        <a className="nav-link navbar-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div className={"work-request-area"}>
                <a className={"work-request-link"} href="">Work Request</a> <span
                className={"right-arrow"}><FaAngleRight color={'#ffffff'}/></span>
            </div>
        </div>
    </nav>

};

export default Header;
