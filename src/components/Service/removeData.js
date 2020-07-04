import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeQueue } from "../../store/actions";
import "./service.css";

export default () => {
  const queues = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeQueue());
    queues[0] &&
      alert(`Currently in service ${queues[queues.length - 1].name}`);
  };

  return (
    <div className='center'>
      <button disabled={!queues[0]} onClick={handleRemove}>
        Call the next customer
      </button>
    </div>
  );
};
