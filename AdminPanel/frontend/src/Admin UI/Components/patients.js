import React,{useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import './patients.css'; 


const AddNew = (props) => {
    const history = useHistory();  
    return (
        <div>
            <br/>
            <br/>
            <br/>

            <div className="bodyN"></div>
            <div>
                <input type="button" className="button1" value="Add New Patient" onClick={() => history.push('/addNewPatients')} />
            </div>

            <div>
                <input type="button" className="button2" value="Search Patient" onClick={() => history.push('/searchPatients')} />
            </div>
        </div>

    );
}

export default AddNew;



