import React ,{useState,useEffect}from 'react';
import learning4 from '../img/learning4.jpg'; 
import {useHistory} from 'react-router-dom';
import  styles from "../css/Home.css";
import {getTitle} from "./api/api";
import Review from "./Review";



function Home() {
    let result;
    let finalResult;
    let history = useHistory();
    let [selectedVal]=useState();
    const [apiCategories,setApiCategories]=useState([]);
    
    const [categories,setCategories]= useState([
        {
         title:"Select a category",
         _id:"select"
        },
        {
         title:"Mathematics",
         _id:"mathematics",
         categoryId:19
        },
        {
        title:"Geography",
        _id:"geography",
        categoryId:22
        },
        {
        title:"Computing",
        _id:"computing",
        categoryId:18
        },
        {
        title:"History",
        _id:"history",
        categoryId:23
        }
    ])
    const mergedTitles=[...categories,...apiCategories];
    const renderReview=true;
   
    const redirectReview=(val)=>{
        switch (val){
            case 'Mathematics':
                result =   mergedTitles.filter(i=>i.title==val)
                finalResult= result[0].categoryId
                console.log(result);
                console.log(finalResult);
                history.push(`/review/${finalResult}`)
                break;
            case "History":
                result =   mergedTitles.filter(i=>i.title==val)
                finalResult= result[0].categoryId
                console.log(result);
                console.log(finalResult);
                history.push(`/review/${finalResult}`)
                break;
            case "Computing":
                 result =   mergedTitles.filter(i=>i.title==val)
                 finalResult= result[0].categoryId
                 console.log(result);
                 console.log(finalResult);
                 history.push(`/review/${finalResult}`)
                 break;
            case "Geography":
                 result =   mergedTitles.filter(i=>i.title==val)
                 finalResult= result[0].categoryId
                 console.log(result);
                 console.log(finalResult);
                 history.push(`/review/${finalResult}`)
                 break;

            default:
                result = mergedTitles.filter(i=>i.title==val)
                 finalResult= result[0]._id;
                console.log(result)
                console.log(finalResult)
                history.push(`/review/${finalResult}`);

        }
    }  

    const handleChange=(e)=>{
             console.log("Category selected")
             const val= e.target.value;
             console.log(val);
            selectedVal=val
            console.log(selectedVal)
            console.log(mergedTitles)
            }
   
   useEffect(()=>{
       const titles =async()=>{
         const newTitles = await getTitle();
         setApiCategories(newTitles.titles);
         console.log(apiCategories)
       }
       titles();
   },[])

    return (
        <div className="backImage ">
        <div className="container screen" >
        <div className= "row">             
        <div className="col-sm-8 mx-auto align-self-center mb-5 mt-1 text-white welcomeMessage">Welcome to LetsRevise.LetsRevise helps to have a well organised revision in any area of your choice.</div>
        </div>
        <br></br>
        <br></br>
        <div className= "row">
        <div className="col-sm-8 mx-auto">
           <div className="row">
               <div className=" col-sm-6 input-group mb-3">
               <div className="input-group-prepend">
               <button className="btn btn-outline-secondary" type="button">Category</button>
               </div>
               
               <select value={selectedVal} onChange={handleChange} className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                   {mergedTitles.map(category=>(
                       <option value={category.title}>{category.title}</option>
                       
                   ))}
               </select>
               
               </div>                   
               
           
              <div className="col-sm-6">               
                   <button className=" btn btn-lg btn-primary"onClick={()=>redirectReview(selectedVal)} >Take a Review</button>
                  
              </div>  
         </div>
       </div>
</div>            
</div>
        </div>
        
    )
}

export default Home


