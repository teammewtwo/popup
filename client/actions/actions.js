/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
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

export const login = (userName, pass) => ({
  type: types.LOGIN,
  payload: [userName, pass],
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

export const getEvents = (events) => ({
  types: types.GET_EVENTS,
  payload: events,
});

export const signUpUser = () => dispatch => fetch('/api/')
  .then(events => dispatch(getEvents(events)));
