import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch} from "react-router-dom";
import SignupFormPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import {getSpots} from "./store/spotReducer"
import SpotDetailsPage from "./pages/SpotDetailsPage";
import Footer from "./components/Footer"
import BookingPage from "./pages/BookingPage/BookingPage";
import  Modal  from "./components/Modal";
import ReviewPage from "./pages/ReviewPage";
import ConfirmedBookDetails from "./pages/ConfirmedBookDetails";
import CreateSpotPage from "./pages/CreateSpotPage/CreateSpotPage";
import CreateReviewPage from "./pages/CreateReviewPage";

function App() {

 
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);


  useEffect(()=>{
    dispatch(getSpots())
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path={`/spots/create`}>
          <CreateSpotPage />
        </Route>

        <Route exact path="/spots/:id">
          <SpotDetailsPage />
        </Route>
        <Route path={`/booking`}>
          <BookingPage />
        </Route>
        {/* <Route exact path={`/spots/:id/review`}>
          <ReviewPage />
        </Route> */}

        <Route exact path={`/spots/:id/review/new`}>
          <CreateReviewPage />
        </Route>

       
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      )}
      <Footer/>
     <Modal/>
    </>
  );
}

export default App;
