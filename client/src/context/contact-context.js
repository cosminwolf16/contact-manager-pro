import React, { createContext, useReducer } from 'react';

export const ContactContext = createContext();

const initialState = {
  contacts: [],
  contact: {}, // selected or new
  message: {}, // {type: 'succes/fail', title: 'Info|Error' content: 'lorem ipsum' }
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_CONTACTS': {
      return {
        ...state,
        contacts: payload,
        contact: {},
      };
    }
    case 'CREATE_CONTACT': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        message: {
          type: 'success',
          title: 'Success',
          content: 'New Contact created!',
        },
      };
    }
    case 'UPDATE_CONTACT': {
      const contact = action.payload;
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item._id === contact._id ? contact : item
        ),
        message: {
          type: 'success',
          title: 'Update Successful',
          content: `Contact "${contact.email}" has been updated!`,
        },
      };
    }
    case 'FLASH_MESSAGE': {
      return {
        ...state,
        message: payload,
      };
    }
    default:
      throw new Error();
  }
}

export const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {children}
    </ContactContext.Provider>
  );
};
