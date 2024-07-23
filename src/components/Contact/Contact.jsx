import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const deletContact = (id) => dispatch(deleteContact(id));

  return (
    <div className={css.box}>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <div>
        <button className={css.btn} onClick={() => deletContact(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
