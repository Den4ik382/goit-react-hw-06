import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ClientSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(30, "Too long")
    .required("This field is required"),
  phone: Yup.string()
    .min(3, "Too short")
    .max(30, "Too long")
    .required("This field is required"),
});

export default function ContactForm() {
  const name = useSelector((state) => state.contacts.items);
  console.log(name);
  const dispatch = useDispatch();

  const handleSubmit = (values, actoins) => {
    dispatch(addContact(values.username, values.phone));

    actoins.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ClientSchema}
    >
      <Form>
        <div className={css.box}>
          <div className={css.boxInput}>
            <label>Name</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" />
          </div>
          <div className={css.boxInput}>
            <label>Number</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" />
          </div>

          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
