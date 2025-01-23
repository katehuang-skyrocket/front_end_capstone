import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import React from 'react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './AvailableTimesContext';
import 'mutationobserver-shim';


test('renders the BookingForm heading', () => {
  const mockAvailableTimes=["17:00", "18:00", "19:00"]
  render(<BookingForm availableTimes={mockAvailableTimes}/>);
  const linkElement = screen.getByText(/Choose date/i);
  expect(linkElement).toBeInTheDocument();
});


window.fetchAPI = jest.fn(()=>["18:00", "18:30", "19:00"])
test('initializeTimes should return the correct initial times', async () => { 
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()}/>)
  const dateElement = screen.getByLabelText(/Choose date/i)
  fireEvent.change(dateElement, {target:{value: "2025-01-22"}})
  await waitFor(() => {
    expect(window.fetchAPI).toHaveBeenCalledWith(new Date("2025-01-22"));
  });
  const result=window.fetchAPI(new Date("2025-01-22"))
  expect(result).toEqual(["18:00", "18:30", "19:00"]);
});

test("updateTimes returns the same value provided in the state", ()=>{
  const selectionTime=["17:00", "18:00", "19:00"]
  const action = {type: "update_times", payload: selectionTime}
  const mockAvailableTimes = updateTimes([], action);
  
  expect (mockAvailableTimes).toEqual(["17:00", "18:00", "19:00"])
})

test("HTML5 validationa attribute are applied to date input field", ()=>{
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()}/>)
  const dateInput= screen.getByLabelText(/Choose date/i)
  expect(dateInput).toHaveAttribute("type","date");
  expect(dateInput).toHaveAttribute("min", new Date().toISOString().split("T")[0])
  expect(dateInput).toBeRequired();
})

test("HTML5 validation attribute are applied to time input field", ()=>{
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()}/>)
  const timeInput = screen.getByLabelText(/Choose time/i)
  expect(timeInput).toBeRequired()
})

test("HTML5 validation attribute are applied to number of guests field", ()=>{
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()}/>)
  const guestNumber = screen.getByLabelText(/Number of guests/i)
  expect(guestNumber).toHaveAttribute("type","number")
  expect(guestNumber).toHaveAttribute("min","1")
  expect(guestNumber).toHaveAttribute("max","10")
  expect(guestNumber).toBeRequired()
})

test("HTML5 validation attribute are applied to occasion field", ()=>{
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()}/>)
  const occasion = screen.getByLabelText(/Occasion/i)
  expect(occasion).toBeRequired()
})