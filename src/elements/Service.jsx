import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Web Development',
        description: 'We offer to create websites on PHP, WordPress, Magento, React, ASP.Net, Angular, Laravel and .NET MVC. Tech Heuristics provides you web development services, from designing the optimal product architecture to an eye catching front-end. Using the leading web development technologies.'
    },
    {
        icon: <FiLayers />,
        title: 'Mobile Development',
        description: 'We at Tech Heuristics build innovative applications for start-ups and enterprises alike. We provide with highly polished native applications for Android and Cross-platform applications for Android, iOS and Windows.'
    },
    {
        icon: <FiUsers />,
        title: 'Product Development',
        description: 'We have what it takes to develop a product. We will design, build and maintain your product to allow you to focus on building your business.'
    },
    {
        icon: <FiMonitor />,
        title: 'SEO & Marketing',
        description: 'We know you want to be on the top and it takes time, efforts, massive expense and an experienced team. We have them ready for you to boost your business and show it to the outside world.'
    },
    {
        icon: <FiCast />,
        title: 'UI/UX Design',
        description: 'We are a team of young and innovative programmers who are always thinking out of the box to provide with beautiful and engaging designs.'
    },
    {
        icon: <FiMonitor />,
        title: 'SQA Testing',
        description: 'Our professional SQA team evaluates the functional, performance, usability and security of your system before producing it to production. Usability, stability and security is not an option to ever compromise on.'
    },
]
class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Service'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                
                {/* End Service Area */}

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
export default Service;