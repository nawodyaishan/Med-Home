import React,{useState} from "react";
import axios from "axios";
import './patients.css'; 


export default function Patients(){


    const[ name, setName]= useState ("");
    const[ regNo, setregNo]= useState ("");


    function sendData(e){

        e.preventDefault();  
        const newPatient={
            name,
            regNo


        }
            
        axios.post("http://localhost:8003/Patient/add", newPatient).then(()=>{

        alert("Patient Added")
        }).catch ((err)=>{
            alert(err)
        })


    }

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
            
            <br/>
            <br/>
            <br/>


            <form onSubmit={sendData}>
                <div>
                    <h3>Add New Patient</h3>
                </div> 

                <div class="group">
                    <label for="name" class="form-label">Patient's Name</label>
                    <input type="text" class="form-control" id="name" placeholder = "Enter Patient's Name" onChange= {(e)=>{

                        setName(e.target.value);
                         
                    }} />
                 
                </div>


                <div class="group1">

                    <label for="name" class="form-label">Patient's ID no.</label>
                    <input type="text" class="form-control" id="name" placeholder = "Enter Patient's ID no." onChange= {(e)=>{

                        setregNo(e.target.value);
 
                    }}  />
                 
                </div>

                <div class="group3">

                    <label for="name" class="form-label">Patient's Email</label>
                    <input type="text" class="form-control" id="name" placeholder = "Enter Patient's E-mail"  />
                 
                </div>

               

                <select class="select" aria-label="Default select example">


                        <option selected>Select the category</option>
                        <option value="1">category A</option>
                        <option value="2">category B</option>
                        <option value="3">category C</option>
                       

                     </select>

                     <div>

                     <select class="select" aria-label="Default select example">


                        <option selected>Select the category</option>
                        <option value="1">category A</option>
                        <option value="2">category B</option>
                        <option value="3">category C</option>
                        <option value="4">category D</option>
                        <option value="5">category E</option>

                     </select>
                     </div>
              

                     <div>


                <button type="submit" class="btn">Submit</button>
                

                </div>
                </form>
        </div>



    );

}

