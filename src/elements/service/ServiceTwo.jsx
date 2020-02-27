import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiCode, FiHardDrive } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'SEO & Marketing',
        description: 'We know you want to be on the top and it takes time, efforts, massive expense and an experienced team. We have them ready for you to boost your business and show it to the outside world.'
    },
    {
        icon: <FiLayers />,
        title: 'UI/UX Design',
        description: 'We are a team of young and innovative programmers who are always thinking out of the box to provide with beautiful and engaging designs.'
    },
    {
        icon: <FiUsers />,
        title: 'SQA & Testing',
        description: 'Our professional SQA team evaluates the functional, performance, usability and security of your system before producing it to production. Usability, stability and security is not an option to ever compromise on.'
    },
    {
        icon: <FiMonitor />,
        title: 'DATA Processing',
        description: 'Data processing, Manipulation of data by a computer. It includes the conversion of raw data to machine-readable form, flow of data through the CPU and memory to output devices, and formatting or transformation of output.'
    },
    
]

class ServiceTwo extends Component{
    render(){
        let title = 'Other Services',
        description = 'Our IT & Management Consultants bring innovative services & solutions for your business.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
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
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
