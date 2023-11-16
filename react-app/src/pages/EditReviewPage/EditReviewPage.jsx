import React, { useEffect } from 'react'
import "./EditReviewPage"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getReview, updateReview } from '../../store/reviewReducer'
import CreateRating from '../../components/CreateRating'


const EditReviewPage = () => {
    const {spot_id, review_id} = useParams()
    const review = useSelector(state => state.reviews.review)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getReview(spot_id,review_id))
    },[dispatch, spot_id, review_id])


  return (
    <main className='edit-review-page-main'>
<div className='edit-review-page-container'>
    <h2>Uodate Review</h2>
    <form className='edit-review-page-form'>
    <label>
        <div><CreateRating/></div>
    </label>

    </form>
</div>

    </main>
    
  )
}

export default EditReviewPage