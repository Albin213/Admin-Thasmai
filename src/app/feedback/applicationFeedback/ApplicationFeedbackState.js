"use client";

import { create } from "zustand";

export const useApplicationFeedbackStore = create((set) => ({

  FieldValues :["User Id","Rating"],
  dateOperator: [
    "equal to",
    "between",
  ],
  stringOperator: ["starts with", "equal to"],
  
  integerOperator: ["greater than","less than","equal to","not equalto"],

  ratingValues: ["Good", "Average", "Bad"],

    

  toastData: {
    toggle:false,
    message:""
  },
  setToastData:(tog,message) => set(state => {return ({toastData : {toggle : tog ,message: message}})}),

  fetchData:[],
     setFetchData: (data) => set(state => {//console.log(data);
      return ({fetchData:[...data]})}),


  FieldValue : "",
    setFieldText : (text) => set(state => ({FieldValue:text})),

    operatorValue: "",
    setOperatorValue: (text) => set(state => ({operatorValue: text})),

    filters : [],
    setFilter : (filter)  => set(state =>  { return ({filters:[...state.filters,filter]} ) } ),
    deleteFilter : (index) => set(state => { console.log(index,);const fil = [...state.filters]; fil.splice(index,1); return ({filters:[...fil]})}),





  appFeedbacks : [],
  setAppFeedbacks : (data) => set(state =>{return ({ appFeedbacks : data })}),

  

  id: "",
  setId :   (newId) => set((state) =>{ return ({ id : newId })}),

  appointmentViewToggle: false,
  setAppointmentViewToggle : (toggle, appointment) => set((state) => { 
    let view_id = "";
    if(appointment) {
      view_id = appointment
    } else {
      view_id = state.id
    } 
    return ({  appointmentViewToggle : toggle, id : view_id})}),



    feedbackViewToggle: false,
    setFeedbackViewToggle : (toggle, feedback) => set((state) => { 
      let feedback_id = "";
      if(feedback) {
        feedback_id = feedback
      } else {
        feedback_id = state.id
      } 
      return ({  feedbackViewToggle : toggle, id : feedback_id})}),

   
}))