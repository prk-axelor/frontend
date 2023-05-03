import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "./contactapi";

export default function ContactForm() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState({ firstName: "", lastName: "" });
  const [saving, setSaving] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    if (isNaN(id)) {
      api.addContact(data).then((response) => {
        if (response) {
          router.push(`/Contact/${response.data[0].id}`);
        }
        setSaving(false);
      });
    } else {
      api.updateContact(id, data);
      setSaving(false);
    }
  };

  useEffect(() => {
    if (id) {
      api.getContact(id).then(setData);
    }
  }, [id]);

  const handleChange = (e) => {
    const { value, name } = e.target || {};

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <center>
        <h1> {isNaN(id) ? "add user" : "update user"}</h1>
        <form>
          <label>First name:</label>
          <input
            type="text"
            id="first"
            disabled={saving}
            name="firstName"
            value={data?.firstName || ""}
            onChange={handleChange}
          />
          <br />
          <label>Last name:</label>
          <input
            type="text"
            id="last"
            disabled={saving}
            name="lastName"
            value={data?.lastName || ""}
            onChange={handleChange}
          />
          <br />
          <button type="submit" onClick={handelSubmit} disabled={saving}>
            {isNaN(id) ? "SUBMIT" : "UPDATE"}
          </button>
        </form>
      </center>
    </>
  );
}
