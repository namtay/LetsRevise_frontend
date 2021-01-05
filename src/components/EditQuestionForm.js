import React from 'react';
import {useForm} from "react-hook-form";

function EditQuestionForm({preloadedValues,onSubmit}) {
    const {register,handleSubmit} = useForm({
        defaultValues: preloadedValues       
         });
    return (
        <div className="container screen mt-auto">
        <div>
          <h3>Edit Question</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group col-sm-6">
              <label htmlFor="text">Question:</label>
              <input
                name="question"
                ref={register}
                className="form-control"
                type="text"
                />
                
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="text">Answer:</label>
              <input
                name="answer"
                ref={register}
                className="form-control"
                type="text"
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

    )
}

export default EditQuestionForm
