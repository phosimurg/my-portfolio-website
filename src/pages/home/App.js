import React from "react";
import './App.scss';
import Header from "../../components/Header";
import DescCard from "../../components/DescCard";
import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import Soft from './assets/soft.png'


function App() {
    return (
        <div className="App">

            {/*Welcome Area*/}
            <div className={"welcome-container"} id={'welcome'}>

                <div className={"header-container"}>
                    <Header/>
                </div>

                <div className={"info-cards first-info"}>
                    👋 <br/> Hi! I am <br/> <b> Ahmet</b>
                </div>

                <div className={"info-cards second-info"}>
                    Hobby {'  '}📸<br/>Photographer
                </div>

                <div className={"info-cards third-info"}>
                    Gamer!🎮
                </div>

                <div className={'welcome-in'}>
                    <div className={"head-img-container container-fluid"}>
                        <img src="/assets/my-photo-black.jpg" className={"img-fluid head-img"} alt="my-photo"/>
                    </div>
                    <div className={"head-title-container"}>
                        <h1 className={"head-title"}>Software Developer</h1>
                        <h4 className={"head-subtitle"}>Based in Istanbul, Turkey</h4>
                        <h6 className={"head-subtitle"} style={{fontSize: '16px', fontStyle: 'italic'}}>"Veritas Lux
                            Mea"</h6>
                    </div>
                </div>

            </div>

            {/*About Area*/}
            <div className={"about-container container-fluid"} id={'about'}>
                <div className={"about-in"}>
                    <div className={"nice-word-sec container"}>
                        <h1 className={"nice-word-title"}>People don't realize that the whole life of one person can be
                            changed with one book.</h1>
                        <h4 className={"nice-word-subtitle"}>- Malcolm X</h4>
                    </div>

                    <div className={"about-sec container"}>
                        <h3 className={"about-title"}>About 👨‍💻</h3>
                        <p className={"about-text"}>The biggest reason I became a software developer was my passion for
                            computers when I was a kid. <br/> Continually improving with this passion, I work to be the
                            best
                            in
                            what I do. Besides my job, in my private life I like video games, books, travel and
                            swimming.
                        </p>
                    </div>
                </div>
            </div>

            {/*Skills Area*/}
            <div className={"skills-container container-fluid"} id={'skills'}>
                <div className={"card-sec container"}>

                    <div className={"frontend-card col"}>
                        <DescCard title={'Frontend'} subtitle={'Html, Css, Sass, Bootstrap, Js, React.js'}/>
                    </div>

                    <div className={"backend-card col"}>
                        <DescCard title={'Backend'} titleColor={'yellow'}
                                  subtitle={'Php, Laravel, Mysql, MsSql, Asp.Net, Next.js'}/>
                    </div>

                    <div className={"software-card col"}>
                        <DescCard title={'Software Development'} titleColor={'blue'}
                                  subtitle={'C#, Selenium, Unity3D, .Net'}/>
                    </div>

                    <div className={"other-card col"}>
                        <DescCard title={'Other'} titleColor={'green'}
                                  subtitle={'Project Management, Mobile Developing, Adobe Tools(PS, XD, AI, AN), Microsoft Tools, Jira etc.'}/>
                    </div>

                </div>
                <div className={"emoji-sec"}>
                    <img className={"emoji-img img-fluid"} src={Soft} alt="soft"/>
                </div>

                <div className={"skill-title"}>
                    Skills 💪
                </div>
            </div>

            {/*Contact Area*/}
            <div className={"contact-container container-fluid"} id={'contact'}>
                <div className={'contact-in'}>
                    <h1 className={"contact-title"}>Wanna know more? </h1>
                    <h1 className={"contact-title-second"}>Visit my Social Links</h1>
                    <div className={"social-links container"}>
                        <a href="https://www.instagram.com/phosimurg/" className="insta-link"><FaInstagram
                            className={'soc-icon ins-ico'}/></a>
                        <a href="https://www.linkedin.com/in/phosimurg/" className="in-link"><FaLinkedinIn
                            className={'soc-icon in-ico'}/></a>
                        <a href="https://github.com/phosimurg" className="git-link"><FaGithub
                            className={'soc-icon git-ico'}/></a>

                    </div>
                    <div className={"email-sec"}>
                        <a href="mailto:phosimurg@gmail.com">phosimurg@gmail.com</a>
                    </div>
                </div>
            </div>

            <div className={"work-request-container"} id={"workRequest"}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdmN2ggVzgnscikb-KB_s-wViKnT51YnNPTQPx6ZJw9VXgs2g/viewform?embedded=true"
                    className={"iFrameSec"} frameBorder="0" marginHeight="0" marginWidth="0">Yükleniyor…
                </iframe>
            </div>

            {/*Footer Area*/}
            <div className={"footer-container"}>
                ©2022 Ahmet YILDIZ
            </div>
        </div>
    );
}

export default App;
