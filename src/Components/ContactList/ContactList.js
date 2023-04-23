import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchContacts, deleteContact } from "../../redux/operations";
import { getContacts, getFilter } from "../../redux/selectors";

import s from "./ContactsList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(getFilter);

  const getVisibleContactsList = () => {
    const normolizedFilter = filter.request.toLowerCase().trim();
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  };
  const visibleContacts = getVisibleContactsList();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, phone }) => (
        <li className={s.item} key={id}>
          <p>
            {name}: {phone}
          </p>
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
