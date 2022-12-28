import React, { useState } from "react";
import Memo from "./Memo/Memo";
import MemoForm from "./MemoForm/MemoForm";

const Memos = (props) => {
  const [memos, setMemos] = useState(props.memos);
  const onSubmitHandler = (newSubmission) => {
    setMemos((prevState) => [...prevState, newSubmission]);
  };

  return (
    <div>
      <MemoForm newSubmission={onSubmitHandler}></MemoForm>
      {memos.map((item) => (
        <Memo memo={item}></Memo>
      ))}
    </div>
  );
};

export default Memos;
