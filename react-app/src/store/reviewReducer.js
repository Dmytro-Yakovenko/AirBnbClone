//types 
const CREATE_REVIEW = "review/CREATE_REVIEW"
const UPDDATE_REVIEW ="review/UPDATE_REVIEW"
const DELETE_REVIEW = "review/DELETE_REVIEW"


//actions

export const createReview =(data)=>({
    type:CREATE_REVIEW,
    payload:data
});


export const editReview =(data)=>({
    type:UPDDATE_REVIEW,
    payload:data
});

export const removeReview =(id)=>({
    type:DELETE_REVIEW,
    payload:id
});


//fetch request

export const createNewReview = (data, spotId)=>async (dispatch)=>{
    console.log(data,444444)
    const res =await fetch (`/api/spots/${spotId}/reviews`,{

        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
    })
    if(res.ok){
        dispatch(createReview(await res.json()))
        return res.ok
    }
}



export const updateReview = (data, spotId, reviewId)=>async (dispatch)=>{
    const res = await fetch(`/api/spots/${spotId}/reviews/${reviewId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    if(res.ok){
        dispatch(editReview(await res.json()))
        return res.ok
    }
}


export const deleteReview = (spotId, reviewId)=>async(dispatch)=>{
    const res = await fetch(`/api/spots/${spotId}/reviews/${reviewId}`,{
        method:"DELETE",
        headers: {
			"Content-Type": "application/json",
		},
    })

    if(res.ok){
        dispatch(removeReview(reviewId))

    }
}

//initial states
const initialState = {
    reviews:{},
    isLoading:true,
    review:{},
}

//reducers

const reviewReducer = (state =initialState, action)=>{
    switch(action.type){
        case CREATE_REVIEW:
            return {...state, review:action.payload}
        
            default:
                return state
    }

}


export default reviewReducer








