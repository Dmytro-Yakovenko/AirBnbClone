//types

const SET_EDIT_PROFILE = "profile/SET_EDIT_PROFILE"



export const setEditProfile=()=>({
    type:SET_EDIT_PROFILE, 
    
})


///initial state

const initialState={
    editProfile:false
}

//reducers


const editProfileReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_EDIT_PROFILE:
            return {...state, editProfile:!state.editProfile}

        default:
            return state;

    }
}

export default editProfileReducer