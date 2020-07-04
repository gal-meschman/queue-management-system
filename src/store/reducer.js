export default (state = [], action) => {
  switch (action.type) {
    case "ADDQUEUE":
      return [action.payload, ...state];
    case "REMOVEQUEUE": {
      let newState = [...state];
      newState.splice([...state].length - 1, 1);
      return newState;
    }
    default:
      return state;
  }
};
