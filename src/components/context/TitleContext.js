import React,{createContext,useState} from 'react';

export const TitleContext = createContext();

export const TitleProvider = (props) => {
    const [newTitles, setNewTitles] = useState([]);
    const [newQuestions, setNewQuestions] = useState([]);

    const [addQuestions, setAddQuestions] = useState({
      question: "",
      correct_answer: "",
      titleId: "",
    });
    
  

    return(
       <TitleContext.Provider value={{ title:[newTitles,setNewTitles],question:[newQuestions,setNewQuestions], addQuestion: [addQuestions, setAddQuestions]}}>
           {props.children} 
       </TitleContext.Provider>
    );
}
