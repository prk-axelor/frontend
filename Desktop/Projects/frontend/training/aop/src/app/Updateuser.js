import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { rest } from "../services/http";
function Updateuser() {
  const { id } = useParams();
  const [data, setdata] = useState({ lastName: "" });
  const api = {
    updcontact: () => {
      rest
        .post("ws/rest/com.axelor.contact.db.Contact", {
          data: { id: `${id}` },
        })
        .then((Response) => {
          setdata(Response.data.data);
        });
    },
  };
  useEffect(() => {
    api.updcontact();
  }, []);
  console.log(data);

  // const navigate = useNavigate();

  return <div>{data && <p>{data.lastName}</p>}</div>;
}

export default Updateuser;
