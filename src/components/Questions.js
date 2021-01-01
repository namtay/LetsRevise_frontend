import React,{useState} from 'react';
import ReactCardFlip from "react-card-flip";
import ReviewStyles from "../css/Review.css";
import {item} from '../css/Questions.css';

export const Questions = ({questions,loading}) => {

    const [isFlipped,setIsFlipped]=useState(false);

    if (loading){
        return <h2>Loading....</h2>
    }

    const handleClick =(event)=>{
        event.preventDefault();
        setIsFlipped(!isFlipped);
    }

   
    return (
        <div className="container">
           <div className="row">
                 <div className="col-sm-6 mx-auto mt-5">
                 {questions.map((question)=>(
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
                        <div className="card bg-secondary cardWidth">
                            <div className="card-body text-light">
                                <h5 className="card-title mb-5">Question</h5>
                                <p className="card-text mb-5">{question.question}</p>
                                <button className="btn btn-primary" onClick={handleClick}>Answer</button>
                            </div>
                        </div>
                        <div className="card  bg-secondary cardWidth">
                            <div className="card-body text-light">
                                <h5 className="card-title mb-5">Answer</h5>
                                <p className="card-text mb-5">{question.correct_answer}</p>
                                <button className="btn btn-primary " onClick={handleClick}>Question</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                ))}
                    
                 </div>
           </div>
           
        </div>
    )
}
