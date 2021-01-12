
import axios from "axios";
/*function for creating title*/
export const createTitle=(newTitle)=>{
    
        axios.post('https://letsrevise2.herokuapp.com/title/create',newTitle)
        .then(res=>console.log(res.data))    
        
    }
    
    
export const getTitle = async(req,res)=>{
    let result;
    await  axios.get('https://letsrevise2.herokuapp.com/title')
        .then((res)=>{result = res.data
        })
          
    return result
    }
    
export const getTitleById= async(id)=>{
    let result ;
  await axios.get(`https://letsrevise2.herokuapp.com/title/${id}`)
  .then(res=>result = res.data)
  return result
} 


export const editTitle=(newTitle,id)=>{
    axios.post(`https://letsrevise2.herokuapp.com/title/edit/${id}`,newTitle)
    .then(res=>console.log(res.data))
}


export const deleteTitle=(id)=>{
    axios.delete(`https://letsrevise2.herokuapp.com/title/delete/${id}`)
    .then(res=>console.log(res.data))
}


export const getQuestions=async(id)=>{
    let result
    await axios.get(`https://letsrevise2.herokuapp.com/question/${id}`)
    .then(res=>{
        result=res.data
        console.log(res.data)})
    return result
}

export const createQuestion=(newQuestion,id)=>{
    
    axios.post(`https://letsrevise2.herokuapp.com/question/create/${id}`,newQuestion)
    .then(res=>console.log(res.data)) 
}


export const getQuestionById=async(id)=>{
    let result ;
  await axios.get(`https://letsrevise2.herokuapp.com/question/one/${id}`)
  .then(res=>result = res.data)
  return result
}


export const editQuestion=(newQuestion,id)=>{
    axios.post(`https://letsrevise2.herokuapp.com/question/edit/${id}`,newQuestion)
    .then(res=>console.log(res.data))
}

export const deleteQuestion=(id)=>{
    axios.delete(`https://letsrevise2.herokuapp.com/question/delete/${id}`)
    .then(res=>console.log(res.data))
}

export const signUp=(newData)=>{
    axios.post(`https://letsrevise2.herokuapp.com/user/signup`,newData)
    .then(res=>console.log(res.data))   
}


export const signIn=(newData)=>{
    axios.post(`https://letsrevise2.herokuapp.com/user/login`,newData)
    .then(res=>console.log(res.data))   
}