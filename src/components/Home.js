import React from 'react';
import learning4 from '../img/learning4.jpg'; 
import {useHistory} from 'react-router-dom';
import  styles from "../css/Home.css";




function Home() {
    let history = useHistory();
    const redirectReview=()=>{
        history.push("/review");
    }
    return (
        <div className="backImage mt-auto">
        <div className="container screen" >

        <div className= "row">             
        <div className="col-sm-6 mx-auto mb-2">Welcome Message</div>
        </div>
        <div className= "row">
        <div className="col-sm-8 mx-auto">
           <div className="row">
               <div className=" col-sm-6 input-group mb-3">
               <div className="input-group-prepend">
               <button className="btn btn-outline-secondary" type="button">Category</button>
               </div>
               
               <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                   <option selected>Select a category...</option>
                   <option value="1">Mathematics</option>
                   <option value="2">Science</option>
                   <option value="3">Cloud Computing</option>
                   <option value="3">Computing</option>
               </select>
               </div>                   
               
           
              <div className="col-sm-6">               
                   <button className=" btn btn-lg btn-primary" onClick={redirectReview}>Take a Review</button>
              </div>  
         </div>
       </div>
</div>            
</div>
        </div>
        
    )
}

export default Home
