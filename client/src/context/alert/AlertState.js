import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlerts = (message, type, timeout = 4000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { message, type, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlerts
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
