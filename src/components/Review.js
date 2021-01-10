import React,{ useState,useEffect } from 'react';
import Pagination from "./Pagination";
import {Questions} from "./Questions";
import axios from "axios";
import "../css/Review.css";
import{useRouteMatch} from "react-router-dom";
import {getQuestions}from "./api/api";

function Review(props) {
    
    const match =useRouteMatch();  
    const [questions,setQuestions]= useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]= useState(1);
    const [questionPerPage]= useState(1);
    let res;
    
     
    useEffect(()=>{
        const fetchQuestions= async()=>{
             setLoading(true);
             const val= match.params.id;
             switch(val){
                 case "18":
                      res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${val}`);
                     setQuestions(res.data.results);
                     setLoading(false);   
                     break;
                case "19":
                     res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${val}`);
                    setQuestions(res.data.results);
                    setLoading(false);   
                    break;
                case "22":
                     res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${val}`);
                    setQuestions(res.data.results);
                    setLoading(false);   
                    break;
                case "23":
                    res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${val}`);
                    setQuestions(res.data.results);
                    setLoading(false);   
                    break;
                default:
                    res = await getQuestions(val)
                    console.log(res)
                    console.log(res.questions)
                    setQuestions(res.questions)
                    setLoading(false)
            }
        }
             fetchQuestions();
    },[]);

//Get current questions
    const indexOfLastQuestion= currentPage * questionPerPage;
    const indexOfFirstQuestion= indexOfLastQuestion - questionPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion,indexOfLastQuestion);
   
//change page
    const paginate =(pageNumber)=>setCurrentPage(pageNumber);
    return (    
      <div className="reviewimage">
      <br></br>
      <br></br>
      <br></br>
      <div className="page ">
      <Questions questions={currentQuestions} loading={loading}></Questions>
      <Pagination questionPerPage={questionPerPage} totalQuestions={questions.length} paginate={paginate}></Pagination>
      </div>
      </div>
      
    
        
    )
}

export default Review




  