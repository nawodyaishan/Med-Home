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

            <div>
                <button type="submit" className="button1">View Patient
                </button>
            </div>

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



import React from "react";
import './Header.css'; 
import './style.css';
import favicon from "./img/favicon.png";



function Header(){

  return(
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" >
          <img src={favicon} alt="" width="60%" height="70%"/>
        </a>
        <a className="navbar-brand" href="#" Style={{Color:"black"}}>Med @ Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active"  href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/patients">Patients</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/doctors">Doctors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/records">Records</a>
          </li>
        
          </ul>
        </div>
      </div>
    </nav>

)
}

export default Header;