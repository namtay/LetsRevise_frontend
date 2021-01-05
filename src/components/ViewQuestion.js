import React ,{useState,useEffect}from "react";
import "../css/ViewQuestion.css";
import {getQuestionById} from "./api/api";
import {useRouteMatch} from "react-router-dom";

function ViewQuestion() {
    const [question,setQuestion]= useState({});
    const match= useRouteMatch()
    const id= match.params.id
    useEffect(()=>{
      const viewQuestion= async(id)=>{
      const result=await getQuestionById(id)
      setQuestion(result)    
       }
       viewQuestion(id)

    },[])
  return question?(
    <div className="image">
    <div className="container mainBody ">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className="row mt-5">
        <div className="col-sm-7 mx-auto">
          <div className="card " >
            <div className="card-body cardBg">
              <h5 className="card-title">Question</h5>
              <p className="card-text">
                {question.question}
              </p>
              <h6 className="card-subtitle mb-2 text-muted">Answer</h6>
              <p className="card-text">
                {question.correct_answer}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>):<div>Loading</div>
  
}

export default ViewQuestion;
