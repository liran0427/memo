import React from "react";
import Memo from "./Memo/Memo";

const Memos = (props) => {
  const memos = props.memos;
  const memo0 = memos[0];
  const memo1 = memos[1];
  const memo2 = memos[2];
  return (
    <div>
      {memos.map((item) => (
        <Memo memo={item}></Memo>
      ))}
    </div>
  );
};

export default Memos;
