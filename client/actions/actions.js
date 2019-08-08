/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import * as types from '../constants/actionTypes.js'

export const showModal = (modalType) => ({
  type: types.SHOW_MODAL,
  modalType,
});

export const hideModal = () => ({
  type: types.HIDE_MODAL,
});

// additional actions
export const rsvp = (user) => ({
  type: types.RSVP,
  payload: user,
});

export const cancelRSVP = (user) => ({
  type: types.CANCEL_RSVP,
  payload: user,
});

export const pay = () => ({
  type: types.PAY,
});

export const createNewEvent = (date, location, startTime, endTime, description, price, cuisineType, host, maxAttendees) => ({
  type: types.CREATE_NEW_EVENT,
  payload: [date, location, startTime, endTime, description, maxAttendees, cuisineType, price, host],
});

export const editEvent = (date, location, startTime, endTime, description, price, cuisineType, host, maxAttendees) => ({
  type: types.EDIT_EVENT,
  payload: [date, location, startTime, endTime, description, maxAttendees, cuisineType, price, host],
});

export const login = (userName, pass) => ({
  type: types.LOGIN,
  payload: [userName, pass],
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const createNewUser = (firstName, lastName, pass, email) => ({
  types: types.CREATE_NEW_USER,
  payload: [firstName, lastName, email, pass],
});

export const getEvents = (events) => ({
  type: types.GET_EVENTS,
  payload: events,
});

export const getEventsAndDispatch = () => dispatch =>{ 
  fetch('/api')
  .then(function(response){
   // console.log('response', response)
    return response.json();
  })
  .then(function(data){
    //console.log('heRRo', data);
    
    dispatch(getEvents(data)) 
  })
  .catch(er=>{
    console.log('im in err')
  })
}



