// types 
const SET_DATE= "bookings/SET_DATE"
const SET_BOOKING = "booking/SET_BOOKING"
const CREATE_BOOK = "bookong/CREATE_BOOK"


//actions

export const setDate =(data)=>({
    type:SET_DATE,
    payload:data
})

 const createBook = (data)=>({
    type:CREATE_BOOK,
    payload:data
})

//fetch request
export const createNewBooking =(data, userId)=>async(dispatch)=>{
 
    const res = await fetch(`/api/users/${userId}/bookings`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",

          },
        body:JSON.stringify(data)
    })
    console.log(res, 7777)
}

// export const getBooking = (userId)=>async(dispatch)=>{
//     const res = await fetch(`/api/users/${userId}/booking`)
// }
//initial state

const initialState = {
    dates:null,
    bookDetails:null,
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