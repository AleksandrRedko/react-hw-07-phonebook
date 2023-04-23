import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Spinner from "./Spinner/Spinner";

import { getContacts } from "../redux/selectors";
import { fetchContacts } from "../redux/operations";

export default function App() {
  const dispatch = useDispatch();
  const { items, error, isLoading } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <Form />
      {items.length > 0 && (
        <>
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      {isLoading && !error && <Spinner />}
    </div>
  );
}
