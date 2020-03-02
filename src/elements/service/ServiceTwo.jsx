import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiCode, FiHardDrive } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'SEO & Marketing',
        description: ' If you need to manage your social media operations but dont have the time or available resource, Tech Heuristics is here to save the day.We provide a range of social media marketing services which include driving traffic to your social media page or website, content creation and publishing and also research and analysis on your products.'
    },
    {
        icon: <FiLayers />,
        title: 'UI/UX Design',
        description: 'We develop intuitive and graphically pleasing user interfaces for websites, Mobile sites, and application software. Whether you need to enhance an existing application’s user interface or you are starting a new initiative. The value of a software product is directly related with its user interface.'
    },
    {
        icon: <FiUsers />,
        title: 'SQA & Testing',
        description: 'For standalone testing services, Tech Heuristics provides you with a multi-skilled QA & testing team. Experts are chosen based on their skills and qualifications to suit your project’s demands. Our professional management ensures you the best resources for your needs. Our work is transparent and efficient and thus regular check-ins are welcomed.'        
    },
    {
        icon: <FiMonitor />,
        title: 'DATA Processing',
        description: 'Our powerful data mining techniques, including automated and semi-automated data scraping and analysis services, accelerate data analysis. We specialize in creating custom models that collect data, apply the most effective analysis techniques, and convert it into actionable insights'
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
