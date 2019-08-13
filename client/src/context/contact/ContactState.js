import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sam",
        email: "1@1.com",
        phone: "111",
        type: "personal"
      },
      {
        id: 2,
        name: "Ange",
        email: "2@2.com",
        phone: "222",
        type: "personal"
      },
      {
        id: 3,
        name: "John",
        email: "2@2.com",
        phone: "222",
        type: "personal"
      }
    ]
  };

  const [state, dispactch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete Contact

  // Update Contact

  // Set current contact

  // Clear current contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contact: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
