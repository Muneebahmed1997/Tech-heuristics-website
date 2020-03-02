import React, { Component } from "react";

const ServiceList = [
    {
        icon: '01',
        title: 'Web Development',
        description: 'We offer to create websites on PHP, WordPress, Magento, React, ASP.Net, Angular, Laravel and .NET MVC.Tech Heuristics provides you web development services, from designing the optimal product architecture to an eye catching front-end. Using the leading web development technologies.'
    },
    
    {
        icon: '02',
        title: 'Mobile Development',
        description: 'We at Tech Heuristics build innovative applications for start-ups and enterprises alike. We provide with highly polished native applications for Android and Cross-platform applications for Android, iOS and Windows.'
    },
    {
        icon: '03',
        title: 'Product Development',
        description: 'Software development teams emphasize product functionality, but they must adhere to the highest standards for code quality and program design. Version control may be complex, especially considering multiple versions of the software and We will to allow you to focus on building your business.                                                           '
    },

]



class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Digital Agency"/>
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;