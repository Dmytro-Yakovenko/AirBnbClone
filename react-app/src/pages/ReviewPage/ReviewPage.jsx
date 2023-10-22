import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai';

import "./ReviewPage.css"
const ReviewPage = () => {
  return (
    <form>
        <label>
            <textarea placeholder='leave your review'/> 
        </label>

        <label>
            <input placeholder=''/>
            <AiOutlineCamera/>
        </label>

    </form>
  )
}

export default ReviewPage