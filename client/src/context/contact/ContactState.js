import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Sam Hodges',
        email: 'sam@bing.com',
        phone: '0487 780 888',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Angela King',
        email: 'angela@yahoo.com',
        phone: '0400 789 765',
        type: 'personal'
      },
      {
        id: 3,
        name: 'John Hodges',
        email: 'john@gmail.com',
        phone: '0476 428 827',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    ConstantSourceNode.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact

  // Update Contact

  // Set current contact

  // Clear current contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
