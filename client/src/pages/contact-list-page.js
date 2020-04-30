import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ContactList from '../components/contact-list';
import { ContactContext } from '../context/contact-context';

export default function ContactListPage() {
  const [state, dispatch] = useContext(ContactContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3030/contacts');
      dispatch({
        type: 'FETCH_CONTACTS',
        payload: response.data.data || response.data,
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>List of Contacts</h1>
      <ContactList contacts={state.contacts} />
    </div>
  );
}
