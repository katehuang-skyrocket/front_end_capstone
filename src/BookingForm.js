import React, {useState} from "react";
import "./BookingPage.css";

function BookingForm({availableTimes, dispatch, submitForm}) {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("17:00")
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("Birthday")
    const canSubmit = (!date || !time || !guests || !occasion)
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Button clicked!")

        const formData = {
            date,
            time,
            guests,
            occasion,
        };
        submitForm(formData)       
    }
    /*const handleDateChange = (e)=> {
        const selectedDate = new Date(e.target.value);
        setDate(selectedDate)
        setTimeout(()=>{
            const times= window.fetchAPI(selectedDate);
            dispatch({type:"update_times", payload: times});
            }
        )
    }*/

    const handleDateChange = (e) => {
        setDate(e.target.value);
        const selectedDate = new Date(e.target.value);
        if (isNaN(selectedDate.getTime())) {
          console.error("Invalid date selected");
          return;
        }
        setTimeout(() => {
          const times = window.fetchAPI(selectedDate);
          dispatch({ type: "update_times", payload: times });
        }, 0);
      };
      
    return (
        <form className="form_container" onSubmit={handleSubmit}>
            <div className="date">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} 
                    onChange={handleDateChange}
                    min={new Date().toISOString().split("T")[0]}
                    required
                    aria-label="Select a date for your reservation"/>
            </div>
            <div className="time">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} 
                    onChange={(e)=>setTime(e.target.value)}
                    required aria-label="Select a time for your reservation">
                    {availableTimes.map((slot)=> 
                    <option key={slot} value={slot}>{slot}</option>)}
                </select>
            </div>
            <div className="guests">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" 
                value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
            </div>
            <div className="occasion">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} 
                onChange={(e)=>setOccasion(e.target.value)} required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input className="submit" type="submit"  value="Make Your reservation" 
            disabled={canSubmit} aria-label="Submit your reservation form"/>
        </form>
    )
}

export default BookingForm;