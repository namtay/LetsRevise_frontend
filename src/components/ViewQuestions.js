import React, { useState, useEffect } from "react";
import "../css/ViewQuestions.css";
import AddIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import { Link ,useRouteMatch,useHistory} from "react-router-dom";
import DeleteQuestion from "./DeleteQuestion";
import {getQuestions,deleteQuestion} from "./api/api";

function ViewQuestions(props) {
    const [newQuestions, setNewQuestions] = useState([]);
    const [titleId,setTitleId]=useState("");

    const match = useRouteMatch();
    const history = useHistory();

   

    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getQuestions(match.params.id);    
            console.log(data);
            const newData = data.questions;
             setNewQuestions(newData);
             setTitleId(newData[0].titleId)
          };
        fetchQuestions();
      }, []);


      
     

   
    const questionList = newQuestions.map((question) => (
        <tr key={question._id}>
          <td>{`Question ${question.questionNumber}`}</td>
          <td>
            <Link to={`/edit/question/${question._id}`} className="text-dark">Edit</Link>
          </td>
          <td>      
            <Link to={`/view/question/${question._id}`} className="text-dark">View Question </Link>
          </td>
          <DeleteQuestion id={question._id} titleId={titleId} newState={newQuestions}></DeleteQuestion>
        </tr>
      ));

    return (
      <div className="viewquestionsimage">
      <div className="container questionsmainBody mt-auto ">
      <div className="row">
        <div className=" col-sm-10 mx-auto mt-3">
          <h3>Questions per set</h3>
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>Question Number</th>
                <th>Actions</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {questionList}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 ml-auto">
          <Link to={`/create/question/${titleId}`}>
            <AddIcon color="primary" style={{ fontSize: 60 }}></AddIcon>        
          </Link>
        </div>
      </div>
    </div>
      </div>
       
    )
}

export default ViewQuestions;
