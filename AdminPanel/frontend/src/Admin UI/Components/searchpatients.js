import React,{useState} from "react";
import axios from "axios";
import './patients.css'; 



export default function Patients(){

    return(
        <div className="container">
            <br/>
            <br/>

            <form >
                <div>
                    <h3>View Patient</h3>
                </div>    
                
                <div className="reg">
                    <label for="name" className="form-label">Patient's ID no.</label>
                    <input type="text" className="form-control" id="name" placeholder = "Enter Patients ID" />
                        
                </div>

                <div>
                    <button type="submit" className="button1">View Patient
                    </button>
                </div>
                    
            </form>
        </div>
    );
}