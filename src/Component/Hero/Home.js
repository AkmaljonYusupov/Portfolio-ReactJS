import React from 'react'
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1> Hello, my name is <span>Akmaljon </span></h1>
                        <h1 className='surname'> My surname is <span>Yusupov</span></h1>
                        <h2 className='efect'>
                            <span className='a_efect'> a </span>
                            <span className='options_span'>
                                <Typewriter options={{ strings: ["Strong  Junior.", "Developer"], autoStart: true, loop: true }} />
                            </span>
                        </h2>
                        <p> I' m a Strong Junior I have been working as a web programmer  for a year.  I have a lot of experiences with LMS, mainly in Wordpress, and I have created many projects. I' m currently preparing for the Front End and Back End and have created various projects in this regard.</p>
                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME </h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-facebook-f'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt="" />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt="" />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='gradient-border'>
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
