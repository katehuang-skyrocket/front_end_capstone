import React from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css"
import "./App.css"
import { useAvailableTimes } from "./AvailableTimesContext";

function BookingPage() {
    const {availableTimes, dispatch, submitForm}=useAvailableTimes();
    return (
        <div className="app_body">
            <img className="booking_poster" src="/restaurant.jpg" alt="restaurant"/>
            <h1>Reserve a Table</h1>
            <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            submitForm={submitForm}/>
        </div>
    )
}

export default BookingPage