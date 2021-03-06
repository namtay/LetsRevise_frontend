import React,{createContext,useState} from 'react';

export const QuestionsContext = createContext();

export const QuestionsContextProvider=(props)=>{
    const [newQuestions,setNewQuestions]=useState([]);
    return(
       <QuestionsContext.Provider value={[newQuestions,setNewQuestions]}>
           {props.children} 
       </QuestionsContext.Provider>    
    );
}