import React, { useState, useContext } from "react";
import "../css/CreateQuestion.css";
import { useForm } from "react-hook-form";
import { useRouteMatch, useHistory } from "react-router-dom";
import { createQuestion, getQuestions } from "./api/api";
import { TitleContext } from "./context/TitleContext";

function CreateQuestion() {
  const { question, addQuestion } = useContext(TitleContext);
  const [newQuestions, setNewQuestions] = question;
  const [addQuestions, setAddQuestions] = addQuestion;
  
 
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  const history = useHistory();
  const match = useRouteMatch();
  const id = match.params.titleId;
  console.log(id);

  const onSubmit = async (data) => {
    await createQuestion(data, id);
    console.log(data);
    const { question, correct_answer } = data;
    console.log(question);
    setAddQuestions(
      addQuestions.question = question,
      addQuestions.correct_answer = correct_answer,
      addQuestions.titleId = id
    );

    console.log(addQuestions)
    
    const updatedQuestions = [...newQuestions, addQuestions];
    console.log(updatedQuestions)
    
    setNewQuestions(updatedQuestions);
    history.push(`/question/${id}`);
  };

  const submitHandler = (data) => {
    onSubmit(data);
  };
  return (
    <div className="container  mt-auto createQuestionScreen">
      <div>
        <h3>Add Question</h3>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group col-sm-6">
            <label htmlFor="text">Question</label>
            <input
              name="question"
              ref={register}
              className="form-control"
              type="text"
              id="question"
            />
          </div>
          <div className="form-group col-sm-6">
            <label htmlFor="text">Answer</label>
            <input
              name="correct_answer"
              ref={register}
              className="form-control"
              type="text"
              id="answer"
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

export default CreateQuestion;
