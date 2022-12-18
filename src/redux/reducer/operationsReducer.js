import { actionsTypes } from "../actions/constants";

const { ADD } = actionsTypes;

const initialState = {
  productsList: [
    {
      id: 1,
      name: "shoes",
      description: "Nike shoes",
      price: 150,
      date: '"2022-03-25"',
    },
  ],
};

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...initialState,
        productsList: [...initialState.productsList, action.payload],
      };
    default:
      return state;
  }
};
