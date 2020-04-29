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
