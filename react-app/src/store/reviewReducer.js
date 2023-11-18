import { getSpotById } from "./spotReducer";

//types
const CREATE_REVIEW = "review/CREATE_REVIEW";
const UPDDATE_REVIEW = "review/UPDATE_REVIEW";
const DELETE_REVIEW = "review/DELETE_REVIEW";
const GET_REVIEW_BY_ID = "review/GET_REVIEW_BY_ID";

//actions

export const createReview = (data) => ({
  type: CREATE_REVIEW,
  payload: data,
});

export const editReview = (data) => ({
  type: UPDDATE_REVIEW,
  payload: data,
});

export const removeReview = (id) => ({
  type: DELETE_REVIEW,
  payload: id,
});

export const getReviewById = (data) => ({
  type: GET_REVIEW_BY_ID,
  payload: data,
});

//fetch request

export const createNewReview = (data, spotId) => async (dispatch, getState) => {
  const res = await fetch(`/api/spots/${spotId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const data = await res.json()
    dispatch(createReview( data));
    const state = getState()
    const review= [...state.spots.spot.reviews, data]
   
    dispatch(getSpotById({...state.spots.spot, reviews:review}))
    return res.ok;
  }
};

export const updateReview = (data, spotId, reviewId) => async (dispatch) => {
  const res = await fetch(`/api/spots/${spotId}/reviews/${reviewId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    dispatch(editReview(await res.json()));
    return res.ok;
  }
};

export const deleteReview =
  (spotId, reviewId) => async (dispatch, getState) => {
    const res = await fetch(`/api/spots/${spotId}/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      // dispatch(removeReview(reviewId))
      const state = getState();
      const review = state.spots.spot.reviews.filter(
        (item) => item.id !== reviewId
      );

      dispatch(getSpotById({ ...state.spots.spot, reviews: review }));
      return true;
    }
  };

export const getReview = (spotId, reviewId) => async (dispatch) => {
  const res = await fetch(`/api/spots/${spotId}/reviews/${reviewId}`);
  const data = await res.json();
  if (res.ok) {
    dispatch(getReviewById(data));
  }
};

//initial states
const initialState = {
  reviews: {},
  isLoading: true,
  review: {},
};

//reducers

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return { ...state, review: action.payload };
    case GET_REVIEW_BY_ID:
        return {...state, review:action.payload}
    default:
      return state;
  }
};

export default reviewReducer;
