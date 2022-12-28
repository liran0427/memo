import React, { useState } from "react";

const MemoForm = (props) => {
  const [memoSubmit, setMemoSubmit] = useState({
    date: "",
    title: "",
    completion: "",
  });
  const dateChangeHandler = (event) => {
    setMemoSubmit((prevState) => ({ ...prevState, date: event.target.value }));
  };

  const titleChangeHandler = (event) => {
    setMemoSubmit((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const completionChangeHandler = (event) => {
    setMemoSubmit((prevState) => ({
      ...prevState,
      completion: event.target.value,
    }));
  };

  const submissionHandler = (event) => {
    event.preventDefault();
    props.newSubmission(memoSubmit);
  };
  return (
    <div>
      <form onSubmit={submissionHandler}>
        <div>
          <p>date</p>
          <input type="date" onChange={dateChangeHandler}></input>
        </div>
        <div>
          <p>title</p>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div>
          <p>completion</p>
          <input type="text" onChange={completionChangeHandler}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MemoForm;
