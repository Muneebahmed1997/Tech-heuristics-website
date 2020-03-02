import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class About extends Component{
    render(){
        let title = 'About Us',
        description = 'Hi ! Welcome to Tech Heuristics. We are a young software company that provides the optimal solutions to your bussiness problems without compromising on the quality.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">What we Give</h3>
                                                    <p>We provide a wide range of services including web development , mobile application development , Custom CRM development, SEO and Software testing.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">What we Have</h3>
                                                    <p>We provide a wide range of services including web development , mobile application development , Custom CRM development, SEO and Software testing.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}


                {/* Start Finding Us Area  */}
                {/* <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Contact us to Order your Work Now</h4>
                                <p>Need to get in touch with the Team ? We are all Ears</p>
                                <a className="rn-btn btn-white" href="/contact">Support</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about/finding-us-01.png" alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Finding Us Area  */}

                {/* Start Team Area  */}
                {/* <div className="rn-team-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">Skilled Team</h2>
                                    <p>Everything your team needs to build and deliver great software, fast.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                             */}
                            {/* Start Single Team  */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-01.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Muhammad Taimoor</h4>
                                        <p className="designation">Sr. Software Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="https://www.facebook.com/techheuristics/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://www.facebook.com/techheuristics/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-02.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Abdul Moiz</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/techheuristics/"><FaFacebookF /></a></li>
                                        <li><a href="https://www.facebook.com/techheuristics/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://www.facebook.com/techheuristics/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* End Single Team  */}

                            {/* Start Single Team  */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-03.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Muneeb Ahmed</h4>
                                        <p className="designation">Jr. Software Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="https://www.facebook.com/techheuristics/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://www.facebook.com/techheuristics/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* End Single Team  */}

                        {/* </div>
                    </div>
                </div> */}

                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default About