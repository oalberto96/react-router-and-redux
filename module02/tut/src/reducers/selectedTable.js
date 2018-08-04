import { SELECT_TABLE } from "../constants/constants.js";

const selectedTable = (state = null, action) => {
  switch (action.type) {
    case SELECT_TABLE:
      return state == action.id ? null : action.id;
    default:
      return state;
  }
};

export default selectedTable;
