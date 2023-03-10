import React,{useState,useEffect} from "react";
import Student from "../api/Student";
import constants from "../static/constants";
import StudentCRUD from "./StudentCRUD";

export default function Index(){
    const [students,setStudents]=useState([]);
    useEffect(()=>{
        Student[constants,index](setStudents)
    },[])

    return(
        <Grid container spacing={2}>
            <Grid item xs={2}>
             </Grid>
                <Grid item xs={8}>
                    <StudentCRUD students={students}> </StudentCRUD>
                </Grid>
                    <Grid item xs={2}>
                    </Grid>
    
        </Grid>
    );
}