import React, { useState, useEffect, useContext, useMemo } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { getTitleById, editTitle, getTitle } from "./api/api";
import EditTitleForm from "./EditTitleForm";
import { TitleContext } from "./context/TitleContext";

function EditTitle() {
  const match = useRouteMatch();
  const history = useHistory();
  const [retrievedTitle, setRetrievedTitle] = useState(null);
  const {title}= useContext(TitleContext)
  const [newTitles, setNewTitles] = title;

  useEffect(() => {
    const fetchTitle = async () => {
      const newTitle = await getTitleById(match.params.id);
      await setRetrievedTitle(newTitle);
    };
    fetchTitle();
  }, [match.params.id]);

  const submitHandler = async (data) => {
    await editTitle(data, match.params.id);
    console.log(data);
    let view = data.title;
    console.log(view);

    //const item = newTitles.find(i=>i._id==match.params.id);
    const newUpdatedTitles = newTitles.map((i) =>
      i._id === match.params.id ? { _id: match.params.id, title: view } : i
    );

    setNewTitles(newUpdatedTitles);
    console.log(newUpdatedTitles);
    await getTitle();
    history.push("/menu");
  };
  useMemo(() => {}, [newTitles, setNewTitles]);

  return retrievedTitle ? (
    <EditTitleForm
      preloadedValues={retrievedTitle}
      onSubmit={submitHandler}
    ></EditTitleForm>
  ) : (
    <div>Loading....</div>
  );
}

export default EditTitle;
