import React,{useState} from "react";
import axios from "axios";
import './ViewAttendance.css'; 


export default function ViewAttendance(){


    

    
    return(

      
        <div className="container">
        <form >
        <div><h3>View Attendance by student Reg. no.</h3></div>
            
          
                <div class="reg">
                    <label for="name" class="form-label">Student Reg.No.</label>
                    <input type="text" class="form-control" id="name" placeholder = "Enter student Reg. No." />
                 
         </div>

                    <div>
        
                    <button type="submit" class="button1">View Attendence
                    </button>
   
                    </div>


                 <h3>View Attendance of all the Students</h3>
           
           
           
                    <button type="submit" class="button2">View Attendence
                    </button>
                    <h3>View Attendance of all the Students</h3>

                
                </form>
                </div>
       
    )

}


