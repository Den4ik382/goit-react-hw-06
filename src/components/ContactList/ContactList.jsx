import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";
export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filtersContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterName.toLowerCase())
  );
  return filtersContact.map((cont) => {
    return <Contact key={cont.id} contact={cont} />;
  });
}
