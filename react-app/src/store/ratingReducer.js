const CREATE_RATING = "rating/CREATE_RATING";

//actions

export const createRating = (data) => ({
  type: CREATE_RATING,
  payload: data,
});

//initial state
const initialState = {
  rating: 5,
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RATING:
      return { ...state, rating: action.payload };

    default:
      return state;
  }
};


export default ratingReducer