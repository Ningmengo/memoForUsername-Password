import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";

//This is where the username&&password are displayed

const ContactList = ({ data, setData }) => {
  const DeleteData = (id) => {
    const newData = data.filter((singleElement) => singleElement.id !== id);
    setData(newData);
  };

  return (
    <section className="block">
      {data.map((item, index) => {
        const { username, password } = item;
        return (
          <div className="dialog" key={index}>
            <div>
              <p>{username}</p>
              <p>{password}</p>
            </div>
            <Button className="removeItem" onClick={() => DeleteData(item.id)}>
              remove
            </Button>
          </div>
        );
      })}
    </section>
  );
};
export default ContactList;
