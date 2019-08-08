/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import { userInfo } from 'os';
import * as types from '../constants/actionTypes.js';

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

export const createNewEvent = (userData) => {
  console.log('asdfasdfasdfasdfasdfasdfsadfasdfasdfadsfasdfadsfadsfasdfasdf', userData);
  return (dispatch => fetch('/api/newevent', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
  }));
};
export const editEvent = (date, location, startTime, endTime, description, price, cuisineType, host, maxAttendees) => ({
  type: types.EDIT_EVENT,
  payload: [date, location, startTime, endTime, description, maxAttendees, cuisineType, price, host],
});

export const getEvents = (events) => ({
  type: types.GET_EVENTS,
  payload: events,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const createNewUser = (userData) => {
  console.log('asdfasdfasdfasdfasdfasdfsadfasdfasdfadsfasdfadsfadsfasdfasdf', userData);
  return (dispatch => fetch('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
  }));
};


export const login = (user) => {
  console.log("Here is the username for the attempted login: ", user);
  return (dispatch => fetch('auth/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response);
    return response.json();
  }).then(data =>{
    console.log(data);
  }).catch(error => {
    console.log(error);
  }));
  // router.post('/login', userController.verifyUser, cookieController.setCookie, sessionController.createSession,
  // (req, res) => res.status(200).json(res.locals.user));

  //here is the old stuff that was in this function 
  // type: types.LOGIN,
  // payload: [userName, pass],
};


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



