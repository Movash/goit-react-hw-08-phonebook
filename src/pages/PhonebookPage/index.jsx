import Contact from "components/Contact";
import { ContPageBox } from "./styled";
import Filter from "components/Filter";
// import Loader from "components/Loader";
// import Error from "components/Error";
import ContactList from "components/ContactList";

const Phonebook = () => {
  return (
    <ContPageBox>
      <h1>Phonebook</h1>
      <Contact />
      <h2>Contacts</h2>
      <Filter />
      {/* <Error />
      <Loader /> */}
      <ContactList />
    </ContPageBox>
  );
}

export default Phonebook