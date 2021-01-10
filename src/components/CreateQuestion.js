import React from 'react';
import "../css/CreateQuestion.css";
import { useForm } from "react-hook-form";
import {useRouteMatch,useHistory} from "react-router-dom";
import {createQuestion,getQuestions} from "./api/api";

function CreateQuestion() {
    const { register, handleSubmit } = useForm({
        defaultValues: { },
      });
      const history = useHistory();
      const match = useRouteMatch();
       const id= match.params.titleId
       console.log(id);
      
       const onSubmit =async (data)=>{
        console.log(data)
        await  createQuestion(data,id);       
        let val=   JSON.stringify(data);
        console.log(val);    
        history.push(`/question/${id}`);
        await getQuestions()
          
       }

       
    const submitHandler = (data) => {
        onSubmit(data);   
       
        
     
   };
    return (
        <div className="container  mt-auto createQuestionScreen">
      <div>
        <h3>Add Question</h3>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group col-sm-6">
            <label htmlFor="text">Question</label>
            <input
              name="question"
              ref={register}
              className="form-control"
              type="text"
              id="question"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="text">Answer</label>
            <input
              name="answer"
              ref={register}
              className="form-control"
              type="text"
              id="answer"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default CreateQuestion
