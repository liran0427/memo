import React, { useState } from "react";
import Card from "../Card/Card";
import MemoCompletion from "./MemoCompletion";
import MemoDate from "./MemoDate";
import MemoTitle from "./MemoTitle";

const Memo = (props) => {
  const memoTitle = props.memo.title;
  const memoDate = props.memo.date;
  const [memoCompletion, setMemoCompletion] = useState(props.memo.completion);

  const finishMemoHandler = () => {
    setMemoCompletion("Finished");
  };

  return (
    <Card>
      <MemoTitle title={memoTitle}></MemoTitle>
      <MemoDate date={memoDate.toString()}></MemoDate>
      <MemoCompletion completion={memoCompletion}></MemoCompletion>
      <button onClick={finishMemoHandler}>Finish Memo</button>
    </Card>
  );
};

export default Memo;
