import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../../redux/operations";
import { getContacts } from "../../redux/selectors";

import s from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;

      default:
        return;
    }
  };
  const nameUniquenessCheck = (newName) => {
    return items.some((contact) => contact.name === newName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameUniquenessCheck(name)) {
      alert("такой контакт уже есть");
      return;
    }

    dispatch(addContact({ name, phone }));

    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={s.input}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>

      <button className={s.button} type="submit">
        add contact
      </button>
    </form>
  );
}
