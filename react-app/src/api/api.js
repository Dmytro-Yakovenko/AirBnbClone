export const updateSpotImages = async (data, id, image_id)=>{
    await fetch(`/api/spots/${id}/spot_images/${image_id}`,{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
   
}

export const createSpotImages = async(data, id)=>{
    await fetch(`/api/spots/${id}/spot_images`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    
}