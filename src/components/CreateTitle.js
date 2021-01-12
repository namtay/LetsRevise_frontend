import React,{useContext,useState} from "react";
import {createTitle,getTitle} from "./api/api";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../css/CreateTitle.css";
import {TitleContext} from "./context/TitleContext";

function CreateTitle() {
  const history = useHistory();
  const [createdTitle,setCreatedTitle]=useState({});
  const {title}=useContext(TitleContext)
  const [newTitles, setNewTitles] = title;
  const { register, handleSubmit } = useForm({
    defaultValues: { },
  });

  const onSubmit =async (data)=>{ 
    await  createTitle(data); 
    setCreatedTitle(data); 
    console.log(createdTitle);
    setNewTitles(prevNewTitles=>[...prevNewTitles, createdTitle])     
    let val=   JSON.stringify(data);
    console.log(val);    
    history.push("/menu")
    await getTitle()
      
   }

  const submitHandler = (data) => {
       console.log(data);
       let val=   JSON.stringify(data);
       console.log(val);
       alert(val);
       onSubmit(data);
    // history.push("/menu");
  };
  return (
    <div className="container createTitleScreen mt-auto">
      <div>
        <h3>Add Title</h3>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group col-sm-6">
            <label htmlFor="text">Title:</label>
            <input
              name="title"
              ref={register}
              className="form-control"
              type="text"
              id="title"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTitle;
