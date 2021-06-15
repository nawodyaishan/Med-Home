import React,{useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import './doctors.css'; 



const ViewAll = (props) => {
    const history = useHistory();  
    return (
        <div>
            <br/>
            <br/>
            <br/>

            <div className="body"></div>

            <div>
                <input type="button" className="button1" value="Add New Doctor" onClick={() => history.push('/addNewDoctor')} />
            </div>

            <div>
                <input type="button" className="button2" value="View All Doctors" onClick={() => history.push('/viewAllDoctors')} />
            </div>

            <div>
                <input type="button" className="button2" value="Search Doctor" onClick={() => history.push('/searchPatients')} />
            </div>
        </div>

    );
}

export default ViewAll;


