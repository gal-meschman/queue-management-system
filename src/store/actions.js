const addQueue = (newQueue) => {
  return {
    type: "ADDQUEUE",
    payload: newQueue,
  };
};

const removeQueue = () => {
  return {
    type: "REMOVEQUEUE",
  };
};

export { addQueue, removeQueue };
