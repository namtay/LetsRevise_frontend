import React,{useState,useEffect} from 'react';
import { useHistory,useRouteMatch } from "react-router-dom";
import {  getTitleById, editTitle, getTitle } from "./api/api";
import EditTitleForm from "./EditTitleForm";


function EditTitle (){
  const match = useRouteMatch();
    const history = useHistory();
    const [updatedTitle,setUpdatedTitle]=useState(null)
  
    useEffect(()=>{
        const fetchTitle = async()=>{
        const newTitle = await  getTitleById(match.params.id)
         await setUpdatedTitle(newTitle);
           
        }
       fetchTitle()      
        
        },[match.params.id])
      
       
    const submitHandler = async(data) => {   
        await editTitle(data,match.params.id)
        // await getTitle()
        history.push("/menu")
        
    }
        
    return  updatedTitle ? <EditTitleForm preloadedValues={updatedTitle} onSubmit={submitHandler}></EditTitleForm>:<div>Loading....</div>
  
    
}

export default EditTitle;

