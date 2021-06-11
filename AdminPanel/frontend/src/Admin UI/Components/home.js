import React from "react";
import './style.css'; 
import arrowWhite from "./img/arrow-white.png";
import slider1 from "./img/slider1.png";
import slider2 from "./img/slider2.png";
import aboutUs from "./img/about-us.png";
import service1 from "./img/service1.png";
import service2 from "./img/service2.png";
import service3 from "./img/service3.png";
import doctor_with_heart from "./img/doctor_with_heart.png";
import Pulmonary from "./img/Pulmonary.png";
import getroenteritis from "./img/getroenteritis.png";
import cardiology from "./img/cardiology.png";
import nephrology from "./img/nephrology.png";


export default function home(){
    return(
      <div>

        <div id="section-slider1" className="swiper-container p-bot345">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="container text-slider">
                        <h2>Quality Care <br/> <strong>& Comfortable Setting</strong></h2>
                        <div className="cross-line">
                            <span></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry.</p>
                        <button className="btn">Learn More 
                            <i><img alt="" src={arrowWhite}/></i>
                        </button>
                    </div>
                    <img alt="" src={slider1}/>
                </div>
                <div className="swiper-slide">
                    <div className="container text-slider">
                        <h2>Quality Care <br/> <strong>& Comfortable Setting</strong></h2>
                        <div className="cross-line">
                            <span></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing <br/> and typesetting industry.</p>
                        <button className="btn">Learn More 
                            <i><img alt="" src={arrowWhite}/></i>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>


        <div id="section-aboutus" className="container p-top80 p-bot35">
            <div className="row">
                <div className="left col-md-6 p-bot40">
                    <img src={aboutUs} className="img-responsive" alt="" /> 
                </div>
                <div className="right col-md-6 m-top25 p-bot40">
                    <h4>Your care starts here</h4>
                    <h3>Medical Care</h3>
                    <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                    <a href="about-us" className="btn red-btn m-top30">VIEW ALL OUR SERVICE</a>                     
                </div>
            </div>
        </div>


        <div id="section-3points" className="container">
            <div className="services-list">
                <div className="row">
                    <div className="service-block col-md-4">
                        <div className="icon">
                            <img src={service1} alt=" " />
                        </div>
                        <div className="text-block">
                            <div className="heading">Emergency Help</div>
                            <div className="text">
                                <p>There are many variations of passages of lorem ipsum but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-md-4">
                        <div className="icon">
                            <img src={service2} alt="" />
                        </div>
                        <div className="text-block">
                            <div className="heading">Qualified Doctors</div>
                            <div className="text">
                                <p>There are many variations of passages of lorem ipsum but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-block col-md-4">
                        <div className="icon">
                            <img src={service3} alt="" />
                        </div>
                        <div className="text-block">
                            <div className="heading">Award Winning Care</div>
                            <div className="text">
                                <p>There are many variations of passages of lorem ipsum but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div id="light-grey-bg" className="container-fluid">

            <div id="section-ourdepartments" className="container p-bot45">
                <div className="row">
                    <div className="left col-md-6">
                        <h3>Our Departments</h3> 
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p> 
                        <a href="about-us" className="btn blue-btn">VIEW ALL OUR SERVICE</a>
                    </div>
                    <div className="right col-md-6">
                        <img src={doctor_with_heart} className="img-responsive" alt=" " /> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 item p-bot40 p-top65">
                        <img src={Pulmonary} alt="" />
                        <h3>Pulmonary</h3> 
                        <p>Consectetur adipiscing elit, sed do in eiusmod tempor incididunt ut esse dolore magna aliqua.</p>
                        <a href="#"><i className="fa fa-plus"></i> LEARN MORE</a> 
                    </div>
                    <div className="col-md-3 item p-bot40 p-top65">
                        <img src={getroenteritis} alt="" />
                        <h3>Getroenteritis</h3> 
                        <p>Consectetur adipiscing elit, sed do in eiusmod tempor incididunt ut esse dolore magna aliqua.</p>
                        <a href="#"><i className="fa fa-plus"></i> LEARN MORE</a> 
                    </div>
                    <div className="col-md-3 item p-bot40 p-top65">
                        <img src={cardiology} alt="" />
                        <h3>Cardiology</h3> 
                        <p>Consectetur adipiscing elit, sed do in eiusmod tempor incididunt ut esse dolore magna aliqua.</p>
                        <a href="#"><i className="fa fa-plus"></i> LEARN MORE</a> 
                    </div>
                    <div className="col-md-3 item p-bot40 p-top65">
                        <img src={nephrology} alt="" />
                        <h3>Nephrology</h3> 
                        <p>Consectetur adipiscing elit, sed do in eiusmod tempor incididunt ut esse dolore magna aliqua.</p>
                        <a href="#"><i className="fa fa-plus"></i> LEARN MORE</a> 
                    </div>
                </div>
            </div>
            
        </div>



        <div id="section-footer" className="container-fluid">
            <div className="container ft_copyright">
                <div className="col-md-12 col-sm-12 col-xs-12"> 
                    <p>© Copyright 2021. All Rights Reserved by Med@Home. Services / Privacy</p> 
                </div>
            </div>
        </div>
      </div>
       
    );

    

}




