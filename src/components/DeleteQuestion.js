import React,{useState,useEffect,useContext} from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import {Link,useHistory} from "react-router-dom";
import {deleteQuestion, getQuestionById} from "./api/api";
import { TitleContext } from "./context/TitleContext";


function DeleteQuestion(props) {
    const history=useHistory();
    const {question} = useContext(TitleContext); 
    const [newQuestions, setNewQuestions] = question;

    const handleDelete=async(id)=>{
    await deleteQuestion(id);   
    setNewQuestions(newQuestions.filter(i=>i._id!==id))
   
    history.push(`/question/${props.titleId}`)     
    } 
    
    useEffect(()=>{
  

    },[props.newState])
    // const handleDelete=async(id)=>{
      // await deleteQuestion(id);   
      // const questions=newQuestions.filter(question=>question._id===id); 
      // setNewQuestions(questions)
      // setTitleId(newQuestions[0].titleId)
      // history.push(`/question/${titleId}`)
     
    //}

    return (
        <td>
            <Link>
              <DeleteIcon color="secondary" onClick={(e)=>handleDelete(props.id)}></DeleteIcon>
            </Link>
          </td>
    )
}

export default DeleteQuestion
