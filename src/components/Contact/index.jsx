import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/thunks';
import FormContact from 'Forms/FormContact';

const Contact = () => {
  
  const [alreadyLoaded, setAlreadyLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(getAllContacts());
      console.log('useEffect')
      setAlreadyLoaded(true);
    }
  }, [alreadyLoaded, dispatch]);

  return (
    <FormContact />
  );
};

export default Contact;
