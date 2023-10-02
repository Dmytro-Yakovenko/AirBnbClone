import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router-dom"
import Loader from "../../components/Loader";
import "./SpotDetails.css"
import SpotDetailsCard from "../../components/SpotDetailsCard";
import { getOneSpot } from "../../store/spot";



const SpotDetails = () => {
    const isLoading = useSelector((state)=>state.spots.isLoading)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneSpot(id))
    },[dispatch, id])

  return (
    <main className="spotDetails-main">
        <div className="container">
{isLoading && <div className="loader-wrapper"><Loader/></div>}
{!isLoading && <SpotDetailsCard/>}
        </div>


    </main>
  )
}

export default SpotDetails