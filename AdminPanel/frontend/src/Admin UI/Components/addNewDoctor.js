import React,{useState} from "react";
import axios from "axios";
import './patients2.css'; 

export default function Doctors(){

    return(
        <div>
            <br/>
            <br/>
            <section className="get-in-touch">
                <h1 className="title">Add New Doctor</h1>
                <form className="contact-form row">
                    <div className="form-field col-lg-6">
                        <input id="name" className="input-text js-input" type="text" required />
                        <label className="label" for="name">Name</label>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <input id="email" className="input-text js-input" type="email" required />
                        <label className="label" for="email">E-mail</label>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <input id="company" className="input-text js-input" type="text" required />
                        <label className="label" for="company">Address</label>
                    </div>
                    <div className="form-field col-lg-6 ">
                        <input id="phone" className="input-text js-input" type="text" required />
                        <label className="label" for="phone">Contact Number</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input id="message" className="input-text js-input" type="text" required />
                        <label className="label" for="message">Status</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input className="submit-btn" type="submit" value="Add" />
                    </div>
                </form>
            </section>
        </div>







    );
}