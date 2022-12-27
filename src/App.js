import Memo from "./Component/Memo/Memo";
import Card from "./Component/Card/Card";

const INITIAL_MEMOS = [
  {
    id: "a1",
    date: new Date(2020, 1, 1),
    title: "Task 1",
    completion: "To Do",
  },
  {
    id: "a2",
    date: new Date(2020, 2, 1),
    title: "Task 2",
    completion: "Finished",
  },
  {
    id: "a3",
    date: new Date(2020, 3, 1),
    title: "Task 3",
    completion: "To Do",
  },
];

function App() {
  return (
    <Card>
      <Memo memo={INITIAL_MEMOS[0]}></Memo>
    </Card>
  );
}

export default App;
