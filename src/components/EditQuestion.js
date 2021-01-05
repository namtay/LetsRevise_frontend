import React ,{useState,useEffect} from 'react';
import { useHistory,useRouteMatch } from "react-router-dom";
import {  getQuestionById, editQuestion, getQuestions } from "./api/api";
import EditQuestionForm from "./EditQuestionForm";
import "../css/EditQuestion.css";

function EditQuestion() {
    const match = useRouteMatch();
    const history = useHistory();
    const [updatedQuestion,setUpdatedQuestion]=useState(null)
    const [titleId,setTitleId]=useState("")
  
    useEffect(()=>{
        const fetchQuestion = async()=>{
        const newQuestion = await  getQuestionById(match.params.id)       
         await setUpdatedQuestion(newQuestion);
         await  setTitleId(newQuestion.titleId)
           
        }
       fetchQuestion()      
        
        },[updatedQuestion])

        
        const submitHandler = async(data) => {   
            await editQuestion(data,match.params.id)
            
          history.push(`/question/${titleId}`)
            
        }
    
        return  updatedQuestion ? <EditQuestionForm preloadedValues={updatedQuestion} onSubmit={submitHandler} className="mainBody"></EditQuestionForm>:<div className="mainBody">Loading....</div>
    
}

export default EditQuestion
