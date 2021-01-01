import React,{ useState,useEffect } from 'react';
import Pagination from "./Pagination";
import {Questions} from "./Questions";
import axios from "axios";
import "../css/Review.css"

function Review() {
    
   
    const [questions,setQuestions]= useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]= useState(1);
    const [questionPerPage]= useState(1);
     
    useEffect(()=>{
        const fetchQuestions= async()=>{
             setLoading(true);
             const res = await axios.get("https://opentdb.com/api.php?amount=10&category=18");
             setQuestions(res.data.results);
             setLoading(false);
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
            
      <div className="page mt-auto">
      <Questions questions={currentQuestions} loading={loading}></Questions>
      <Pagination questionPerPage={questionPerPage} totalQuestions={questions.length} paginate={paginate}></Pagination>
      </div>
        
    )
}

export default Review




  