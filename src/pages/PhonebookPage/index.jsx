import { ContPageBox } from "./styled";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import FormContact from "Forms/FormContact";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllContacts } from "redux/contacts/thunks";

const Phonebook = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <ContPageBox>
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ContPageBox>
  );
}

export default Phonebook