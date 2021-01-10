import React from 'react';
import {useForm} from "react-hook-form";
import "../css/EditTitleForm.css"

function EditTitleForm({preloadedValues,onSubmit}) {        
                        
            const {register,handleSubmit} = useForm({
                 defaultValues: preloadedValues       
                  });
                                
    return (    
              <div className="container editTitle mt-auto">
                <div>
                  <h3>Edit Title</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group col-sm-6">
                      <label htmlFor="text">Title:</label>
                      <input
                        name="title"
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
            );
        }
    
   

export default EditTitleForm
