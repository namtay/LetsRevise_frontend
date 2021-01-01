
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