import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "./Payment.css";
import { setModalId } from "../../store/modalReducer";



const Payment = () => {
const dispatch = useDispatch()
    const [payment, setPayment] = useState("payFull")


    const handleChange =(e)=>{
       setPayment(e)
       dispatch(setModalId({
        modalId:"featureComing"
       }))
    }




  return (
    <form className="payment-form">
      <h2>Choose how to pay(training purposes)</h2>
      <label className="payment-label">
       <span>Pay</span>
         <input 
         type="radio" 
         value="payFull"
         checked={payment === "payFull"}
         onChange={(e)=>handleChange(e.target.value)}
         />
      </label>
      <label className="payment-label">
        <span>Pay monthly</span>
         <input 
         type="radio"
         value="payMonthly"
         checked={payment === "payMonthly"}
         onChange={(e)=>handleChange(e.target.value)}
         />
      </label>
      <label className="payment-label">
        <span>Pay part now </span>
        <input
         type="radio"
         value="payPart"
         checked={payment === "payPart"}
         onChange={(e)=>handleChange(e.target.value)}
         
         />
      </label>
    </form>
  );
};

export default Payment;
