export const updateSpotImages = async (data, id, image_id)=>{
    const res = await fetch(`/api/spots/${id}/spot_images/${image_id}`,{
        method:"PUT",
        body:JSON.stringify(data)
    })
    console.log(res)
}