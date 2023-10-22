import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai';

import "./ReviewPage.css"
const ReviewPage = () => {
  return (
    <main>
      <div className='review-container'>
      <form className='review-form'>
        <h2>Describe your expirience and add some photos</h2>
        <label>
            <textarea 
            className='review-input'
            rows={10}
            placeholder='leave your review'/> 
        </label>

        <label className='review-label'>
            <input 
            
            className='review-input'
            placeholder='insert your link'/>
            <AiOutlineCamera className='review-icon'/>
        </label>

    </form>
      </div>


    </main>
    
  )
}

export default ReviewPage