//import axios, { Axios } from "axios";
import axios from "axios";
import apiconstants from "../static/apiconstants";

export default [
     index,
     show,
     update,
     store,
     destroy
]
const index=()=>{
   const param =new URLSearchParams();
   const url=apiconstants.api_path+'students';
   
   axios.post(url,param)
    .then(res => {
      console.log(res)
      setStudents(res.data.data)
    })
    .catch(err => {
      console.error(err); 
    })
}

const  show=()=>{
   
}

const  update=()=>{
   
}

const  store=()=>{
   
}

const  destroy=()=>{
   
}