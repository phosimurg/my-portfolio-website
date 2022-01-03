import React from "react";
import './App.scss';
import Header from "../../components/Header";
import DescCard from "../../components/DescCard";
import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import Soft from './assets/soft.png'


function App() {
    return (
        <div className="App">

            <div className={"welcome-container"}>

                <div className={"header-container"}>
                    <Header/>
                </div>

                <div className={"head-img-container container-fluid"}>
                    <img src="/assets/my-photo.jpeg" className={"img-fluid head-img"} alt="my-photo"/>
                </div>
                <div className={"head-title-container"}>
                    <h1 className={"head-title"}>Software Developer</h1>
                    <h4 className={"head-subtitle"}>Based in Istanbul, Turkey</h4>
                </div>

            </div>
            <div className={"about-container container-fluid"}>
                <div className={"nice-word-sec container"}>
                    <h1 className={"nice-word-title"}>People don't realize that the whole life of one person can be
                        changed with one book.</h1>
                    <h4 className={"nice-word-subtitle"}>- Malcom X</h4>
                </div>

                <div className={"about-sec container"}>
                    <h3 className={"about-title"}>About 👨‍💻</h3>
                    <p className={"about-text"}>The biggest reason I became a software developer was my passion for
                        computers when I was a kid. <br/> Continually improving with this passion, I work to be the best
                        in
                        what I do. Besides my job, in my private life I like video games, travel and swimming.</p>
                </div>
            </div>

            <div className={"skills-container container-fluid"}>
                <div className={"card-sec container"}>

                    <div className={"frontend-card"}>
                        <DescCard title={'Frontend'} subtitle={'Html, Css, Sass, Bootstrap, Js, React.js'}/>
                    </div>

                    <div className={"backend-card"}>
                        <DescCard title={'Backend'} subtitle={'Php, Laravel, Mysql, MsSql, Asp.Net, Next.js'}/>
                    </div>

                    <div className={"software-card"}>
                        <DescCard title={'Software Development'} subtitle={'C#, Selenium, Unity3D, .Net'}/>
                    </div>

                    <div className={"other-card"}>
                        <DescCard title={'Other'}
                                  subtitle={'Project Management, Mobile Developing, Adobe Tools(PS, XD, AI, AN), Microsoft Tools, Jira etc.'}/>
                    </div>

                </div>
                <div className={"emoji-sec"}>
                    <img className={"emoji-img img-fluid"} src={Soft} alt="soft"/>
                </div>
            </div>

            <div className={"contact-container container-fluid"}>
                <h1 className={"contact-title"}>Wanna know more? </h1>
                <h1 className={"contact-title-second"}>Visit my Social Links</h1>
                <div className={"social-links container"}>
                    <a href="https://www.instagram.com/phosimurg/" className="insta-link"><FaInstagram size={100}
                                                                                                       className={'soc-icon ins-ico'}
                    /></a>
                    <a href="https://www.linkedin.com/in/ahmet-yildiz-ab5824183/" className="in-link"><FaLinkedinIn
                        className={'soc-icon in-ico'}
                        size={100}/></a>
                    <a href="https://github.com/phosimurg" className="git-link"><FaGithub size={100}
                                                                                          className={'soc-icon git-ico'}/></a>

                </div>
                <div className={"email-sec"}>
                    phosimurg@gmail.com
                </div>
            </div>
        </div>
    );
}

export default App;
