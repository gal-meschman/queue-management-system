import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addQueue } from "../../store/actions";
import "./reception.css";

export default () => {
  const queues = useSelector((state) => state);
  const dispatch = useDispatch();

  const [queue, setQueue] = useState({
    number: queues[0] ? queues[0].number + 1 : 1,
    name: "",
  });

  const handleName = (e) =>
    setQueue({ number: queue.number, name: e.target.value });

  const handleAdd = () => {
    if (queue.name === "") alert("Missing name");
    else {
      setQueue({
        number: queue.number,
        name: queue.name,
      });

      dispatch(
        addQueue({
          ...queue,
          time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        })
      );
      alert(`Hello ${queue.name} your ticket number is ${queue.number}`);
      setQueue({ number: queue.number + 1, name: "" });
    }
  };

  return (
    <div className='addData'>
      <input
        placeholder='Enter Name Here'
        type='text'
        value={queue.name}
        onChange={handleName}
      ></input>
      <button onClick={handleAdd}>Enqueue</button>
    </div>
  );
};
