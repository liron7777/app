import { actionsTypes } from "../actions/constants";

export const add = (product) => {
  return {
    type: actionsTypes.ADD,
    payload: product,
  };
};
