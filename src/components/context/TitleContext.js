import React,{createContext,useState} from 'react';

export const TitleContext = createContext();

export const TitleProvider=(props)=>{
    const [newTitles,setNewTitles]=useState([]);
    const [newQuestions,setNewQuestions]=useState([]);

    
    return(
       <TitleContext.Provider value={{ title:[newTitles,setNewTitles],question:[newQuestions,setNewQuestions]}}>
           {props.children} 
       </TitleContext.Provider>    
    );

    
}
