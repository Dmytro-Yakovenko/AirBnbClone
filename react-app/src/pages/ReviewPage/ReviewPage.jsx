import React, { useState, useEffect } from 'react'
import { AiOutlineCamera } from 'react-icons/ai';
import Button from "../../components/Button"
import "./ReviewPage.css"
const ReviewPage = () => {

const [review, setReview]= useState("")
const [link, setLink]= useState("")
const [errors, setErrors]=useState({})
useEffect(()=>{
const error = {}
if(review.length<4 ){
  error.review = "review is to short"
}
if(review.length>1000){
  error.review="review is to long"
}
if(!link.match(/^https?/)){
error.link = "provide correct http link"
}
setErrors(error)
},[review,link])
const handleSubmit=(e)=>{

e.preventDefault()

}

  return (
    <main>
      <div className='review-container'>
      <form
      onSubmit={handleSubmit}
      className='review-form'>
        <h2>Describe your expirience and add some photos</h2>
        <label>
            <textarea 
            value={review} onChange={(e)=>setReview(e.target.value)}
            className='review-input'
            rows={10}
            placeholder='leave your review'/> 
            {errors.review && <span>{errors.review}</span>} 
        </label>

        <label className='review-label'>
            <input 
            value={link} onChange={(e)=>setLink(e.target.value)}
            className='review-input'
            placeholder='insert your link'/>
            <AiOutlineCamera className='review-icon'/>
            {errors.link && <span>{errors.link}</span>} 
        </label>

        <Button id="createReview" disabled={!errors.review && !errors.link} />

    </form>
      </div>


    </main>
    
  )
}

export default ReviewPage