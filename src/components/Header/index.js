import React from 'react';
import './Header.scss'
import {FaAngleRight} from 'react-icons/fa';
import {FaAlignRight} from 'react-icons/fa';


const Header = () => {


    return <nav className="navbar navbar-expand-lg header-main">
        <div className="container-fluid header-in-container container">
            <div>
                <a className="navbar-brand navbar-title" href="/">Ahmet YILDIZ</a>
                <button className="navbar-toggler toggler-btn" data-target=".navbar-collapse"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="#navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler-ico"><FaAlignRight
                        className={'burger-ico'}/>
                    </span>
                </button>
            </div>

            <div className="collapse navbar-collapse navbar-item-container" toggle="collapse" data-target=".navbar-collapse" id="navbarNav">
                <ul className=" navbar-list">
                    <li className="nav-item navbar-list-item">
                        <a className="nav-link navbar-link" href="#about">About</a>
                    </li>
                    <li className="nav-item navbar-list-item">
                        <a className="nav-link navbar-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item navbar-list-item">
                        <a className="nav-link navbar-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

            <div className={"work-request-area"}>
                <a className={"work-request-link"} href="#workRequest">Work Request</a> <span
                className={"right-arrow"}><FaAngleRight color={'#ffffff'}/></span>
            </div>
        </div>
    </nav>

};

export default Header;
