import React, { useState, useEffect } from "react";
import "../css/Menu.css";
import AddIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link ,useRouteMatch,useHistory} from "react-router-dom";
import { getTitle,deleteTitle } from "./api/api";


function Menu() {
  const match = useRouteMatch();
  const [newTitles, setNewTitles] = useState([]);
  const history = useHistory();

  const fetchTitles = async () => {
    const data = await getTitle();
    console.log(data.titles)
    const newData = data.titles;
     setNewTitles(newData);
  };

  useEffect(() => {
    fetchTitles();
  }, [newTitles]);


   const handleDelete=async(id)=>{
    await deleteTitle(id); 
    fetchTitles();

  }

  const titleList = newTitles.map((title) => (
    <tr key={title._id}>
      <td>{title.title}</td>
      <td>
        <Link to={`/title/${title._id}`}>Edit</Link>
      </td>
      <td>      
        <Link to={`/question/${title._id}`}>View QuestionSet </Link>
      </td>
      <td>
        <Link>
          <DeleteIcon color="secondary"  onClick={(e)=>handleDelete(title._id)}></DeleteIcon>
        </Link>
      </td>
    </tr>
  ));


 

  return (
    
    <div className="container screen mt-auto ">
      <div className="row">
        <div className=" col-sm-10 mx-auto mt-3">
          <h3>Question Sets</h3>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Question Title</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {titleList}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 ml-auto">
          <Link to="/title/create">
            <AddIcon color="primary" style={{ fontSize: 60 }}></AddIcon>
          </Link>
        </div>
      </div>
    </div>
    
    
  );
}

export default Menu;
