import React from "react";
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import BookingPage from "./BookingPage";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AvailableTimesProvider } from "./AvailableTimesContext";
import ConfirmedBooking from "./ConfirmedBooking";

function App() {
  return (
    <Router>
      <AvailableTimesProvider>
        <div className="app_body">
          <div className="header-container">
            <Header/>
            <Nav/>
          </div>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
            <Route path="/confirmed" element={<ConfirmedBooking/>}/>
          </Routes>
          <Footer/>
        </div>
      </AvailableTimesProvider>
    </Router>
  );
}

export default App;
