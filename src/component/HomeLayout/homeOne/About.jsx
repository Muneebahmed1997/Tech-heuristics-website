import React, { Component } from "react";

class About extends Component{
    render(){
      
        let title1 = 'Our Mission Statement',
        description1 = 'To achieve total customer satisfaction by providing best quality oriented dedicated technical resources and infrastructure for better software solutions enhancing systems and leading to business success.';
       
        let title = 'About',
        description = 'Hi ! Welcome to Tech Heuristics. We are a young software company that provides the optimal solutions to your bussiness problems without compromising on the quality.'; 
         
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                        <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title1">{title1}</h2>
                                        <p className="description1">{description1}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.jpg" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;