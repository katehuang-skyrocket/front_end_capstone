import React, { createContext, useContext, useReducer} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
  
export const updateTimes = (state, action) =>{
    switch (action.type){
     case "update_times" :
        return action.payload;
    default:
        return state
    }
}

// Create Context
const AvailableTimesContext = createContext();

// Context Provider Component
export const AvailableTimesProvider = ({ children }) => {
    const [availableTimes, dispatch] = useReducer(updateTimes, []);
    const navigate=useNavigate();

    useEffect(()=>{
        const today_date = new Date(); 
        const times= window.fetchAPI(today_date);
        dispatch({type:"update_times", payload: times})
    },[])

    const submitForm = (formData)=>{
        const formDataConfirmed = window.submitAPI(formData)
        if (formDataConfirmed===true) {
                navigate ("/confirmed")
            } else {
                console.error("Form submission failed")
            }
    }

  return (
    <AvailableTimesContext.Provider value={{ availableTimes, dispatch, submitForm}}>
      {children}
    </AvailableTimesContext.Provider>
  );
};

// Custom Hook for using the context
export const useAvailableTimes = () => useContext(AvailableTimesContext);
