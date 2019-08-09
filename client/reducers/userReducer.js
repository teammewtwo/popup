import * as types from '../constants/actionTypes.js';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  renderState: false,
  loggedIn: false
};

const userReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.LOGIN: 
    console.log("hello")
      return {
        ...state,
        email: action.payload[0],
        password: action.payload[1],
        // loggedIn: true,
      }
    case types.CREATE_NEW_USER: 
      return {
        ...state,
        firstName: action.payload[0],
        lastName: action.payload[1],
        email: action.payload[2],
        password: action.payload[3],
        // loggedIn: true,
      }
      case types.LOGIN_STATE: 
      return {
        ...state,
        renderState: !state.renderState,
      }



    default: 
      return state;
  }


}

export default userReducer; 