const GET_SPOTS = "spots/GET_SPOTS"


const getAllSpots=(data)=>({
    type:GET_SPOTS,
    payload:data
})

export const getSpots =()=> async (dispatch)=>{
    const response = await fetch("/api/spots/")
   
    if(response.ok){
        const data = await response.json()
        dispatch(getAllSpots(data.spots))
    }
}

const initialState = {
    spots:{},
}

const spotReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_SPOTS:
            const spots = action.payload.reduce((acc, curr)=>{
                acc[curr.id]=curr
                return acc 
            },{})
           
            return {...state, spots:spots}
        default:
            return state
    }
}
export default spotReducer