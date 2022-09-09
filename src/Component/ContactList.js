import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";

const ContactList = ({ data }) => {
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
            <Button className="removeItem">remove</Button>
          </div>
        );
      })}
    </section>
  );
};
export default ContactList;
