import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    dispatch(actionCreators.addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;