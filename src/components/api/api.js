
import axios from "axios";

/*function for creating title*/
export const createTitle=(newTitle)=>{
    
        axios.post('http://localhost:5000/title/create',newTitle)
        .then(res=>console.log(res.data))    
        
    }
    
    
export const getTitle = async(req,res)=>{
    let result;
    await  axios.get('http://localhost:5000/title')
        .then((res)=>{result = res.data
        })
          
    return result
    }
    
export const getTitleById= async(id)=>{
    let result ;
  await axios.get(`http://localhost:5000/title/${id}`)
  .then(res=>result = res.data)
  return result
} 


export const editTitle=(newTitle,id)=>{
    axios.post(`http://localhost:5000/title/edit/${id}`,newTitle)
    .then(res=>console.log(res.data))
}


export const deleteTitle=(id)=>{
    axios.delete(`http://localhost:5000/title/delete/${id}`)
    .then(res=>console.log(res.data))
}


export const getQuestions=async(id)=>{
    let result
    await axios.get(`http://localhost:5000/question/${id}`)
    .then(res=>{
        result=res.data
        console.log(res.data)})
    return result
}

export const createQuestion=(newQuestion,id)=>{
    
    axios.post(`http://localhost:5000/question/create/${id}`,newQuestion)
    .then(res=>console.log(res.data)) 
}


export const getQuestionById=async(id)=>{
    let result ;
  await axios.get(`http://localhost:5000/question/one/${id}`)
  .then(res=>result = res.data)
  return result
}


export const editQuestion=(newQuestion,id)=>{
    axios.post(`http://localhost:5000/question/edit/${id}`,newQuestion)
    .then(res=>console.log(res.data))
}

export const deleteQuestion=(id)=>{
    axios.delete(`http://localhost:5000/question/delete/${id}`)
    .then(res=>console.log(res.data))
}

export const signUp=(newData)=>{
    axios.post(`http://localhost:5000/user/signup`,newData)
    .then(res=>console.log(res.data))   
}


export const signIn=(newData)=>{
    axios.post(`http://localhost:5000/user/login`,newData)
    .then(res=>console.log(res.data))   
}