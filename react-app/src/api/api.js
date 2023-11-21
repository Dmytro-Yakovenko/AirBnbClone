export const updateSpotImages = async (data, id)=>{
    const res = await fetch(`/api/spots/${id}/spot_images`)
    console.log(res)
}