// types

const MODAL_ID = "modal/MODAL_ID";

export const setModalId = (data) => ({
  type: MODAL_ID,
  payload: data,
});

//initial state

const initialState = {
  modalInfo: null,
  isOpen: false,
};

// reducers

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ID:
   
      return { ...state, modalInfo: action.payload, isOpen: !state.isOpen };
    default:
      return state;
  }
};

export default modalReducer;
