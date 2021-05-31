import React,{useState} from "react";
import axios from "axios";
import './AddStudent.css'; 


export default function AddStudent(){


    const[ name, setName]= useState ("");
    const[ regNo, setregNo]= useState ("");


    function sendData(e){

        e.preventDefault();  
        const newStudent={
            name,
            regNo


        }
            
        axios.post("http://localhost:8003/student/add", newStudent).then(()=>{

        alert("Student Added")
        }).catch ((err)=>{
            alert(err)
        })


    }

    return(
        <div className="container">
            
            <form onSubmit={sendData}>
                <div class="group">
                    <label for="name" class="form-label">Student Name</label>
                    <input type="text" class="form-control" id="name" placeholder = "Enter student Name" onChange= {(e)=>{

                        setName(e.target.value);
                         
                    }} />
                 
                </div>


                <div class="group1">

                    <label for="name" class="form-label">Student Reg. No</label>
                    <input type="text" class="form-control" id="name" placeholder = "Enter Student Reg.No" onChange= {(e)=>{

                        setregNo(e.target.value);
 
                    }}  />
                 
                </div>

                <div class="group3">

                    <label for="name" class="form-label">Student Email</label>
                    <input type="text" class="form-control" id="name" placeholder = "Enter student E-mail"  />
                 
                </div>

               

                <select class="select" aria-label="Default select example">


                        <option selected>Select the Student Department</option>
                        <option value="1">Engineering</option>
                        <option value="2">Business</option>
                        <option value="3">Thechnology</option>
                       

                     </select>

                     <div>

                     <select class="select" aria-label="Default select example">


                        <option selected>Select the Company</option>
                        <option value="1">A Company</option>
                        <option value="2">B Company</option>
                        <option value="3">C Company</option>
                        <option value="4">D Company</option>
                        <option value="5">E Company</option>

                     </select>
                     </div>
              

                     <div>


                <button type="submit" class="btn">Submit</button>
                

                </div>
                </form>
        </div>



    )

}

