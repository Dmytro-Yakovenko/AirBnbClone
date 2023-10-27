//types

const GET_SPOTS = "spots/GET_SPOTS"
const GET_SPOT_BY_ID = "spots/GET_SPOT_BY_ID"
const CREATE_SPOT = "spots/CREATE_SPOT"

//actions
const getAllSpots=(data)=>({
    type:GET_SPOTS,
    payload:data
})

const getSpotById = (data)=>({
    type:GET_SPOT_BY_ID,
    payload:data
})

const createSpot = (data)=>({
    type:CREATE_SPOT,
    payload:data
})



//fetch
export const getSpots =()=> async (dispatch)=>{
    const response = await fetch("/api/spots/")
   
    if(response.ok){
        const data = await response.json()
        dispatch(getAllSpots(data.spots))
    }
}


export const getOneSpot=(id)=>async(dispatch)=>{
  
    const response = await fetch(`/api/spots/${id}`)
    if(response.ok){
        const data = await response.json()
       
        dispatch(getSpotById(data))
    }
}


export const createNewSpot=(data)=>async(dispatch)=>{
    const response = await fetch(`/api/spots`,{
        method:"POST",
        body:JSON.stringify(data), 
        headers: {
			"Content-Type": "application/json",
		},
      
    })
    console.log(response,2222222)
    if(response.ok){
        const data = await response.json() 
        dispatch(createSpot(data))  
    }
}





//initial states
const initialState = {
    spots:{},
    isLoading:true,
    spot:{},
}



//reducers
const spotReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_SPOTS:
            const spots = action.payload.reduce((acc, curr)=>{
                acc[curr.id]=curr
                return acc 
            },{})
           
            return {...state, spots:spots, isLoading:false}


        case GET_SPOT_BY_ID:
            return {...state, spot:action.payload, isLoading:false}  
        default:
            return state
    }
}
export default spotReducer