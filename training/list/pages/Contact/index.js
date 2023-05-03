import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "./contactapi";

const ContactList = () => {
  const [contactList, setContactlist] = useState([]);

  const [loading, setLoading] = useState(true);

  const handleContact = (id) => {
    const contact = contactList.find((c) => c.id === id);

    console.log({ contact });

    const confirm = window.confirm(`Do you want to delete ${contact.email}?`);

    if (confirm) {
      api
        .deleteContact([{ id, version: contact.version }])
        .then((res) => {
          console.log({ res });
          if (res) {
            setContactlist((contactList) =>
              contactList.filter((c) => c.id !== id)
            );
          }
        })
        .catch((err) => console.log("eror", err));
    }
  };

  useEffect(() => {
    api.getContacts().then((res) => {
      setContactlist(res);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <li>
        <Link href="/Contact/id">adduser </Link>
      </li>
      <table border={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th> email</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {contactList.map((list, id) => {
            return (
              <tr key={id}>
                <td>{list.id}</td>
                <td>
                  <Image
                    src="/logo.png"
                    width="50"
                    height="50"
                    alt="contact"
                  ></Image>
                </td>
                <td> {list.firstName}</td>
                <td> {list.email}</td>

                <td>
                  <a href={`/Contact/${list.id}/`}>update</a>
                </td>
                <td>
                  <a onClick={() => handleContact(list.id)}>delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
// <Link href={`/Contact/${list.id}/`} legacyBehavior>
// <a>update</a>
// </Link>
