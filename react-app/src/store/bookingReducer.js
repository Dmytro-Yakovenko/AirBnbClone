// types 
const SET_DATE= "bookings/SET_DATE"


//actions

export const setDate =(data)=>({
    type:SET_DATE,
    payload:data
})

//initial state

const initialState = {
    dates:null,
}

//reducers


const bookReducer =(state=initialState, action)=>{
    switch(action.type){
        case SET_DATE:
            return {...state, dates:action.payload}
            default:
                return state
    }
}

export default bookReducer