import React from "react";

const ContactList = ({ Datas }) => {
  //   const [username, password] = Datas;
  //   const RenderData = DefaultDatas.DefaultDatas.map((un) => {});
  return (
    <section>
      {Datas.map((data) => {
        const { username, password, id } = data;
        return (
          <div key={id}>
            <p>{username}</p>
            <p>{password}</p>
            <br />
          </div>
        );
      })}
    </section>
  );
};
export default ContactList;
