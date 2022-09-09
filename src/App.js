import { useState } from "react";
import ContactList from "./Component/ContactList";
import Header from "./Component/Header";

function App() {
  const Datas = [
    {
      id: 1,
      username: "2668084184gn@gmail.com",
      password: "guoran88",
    },
    {
      id: 2,
      username: "koreyos220@163.com",
      password: "guoran88",
    },
  ];

  const [data, setData] = useState(Datas);

  return (
    <div className="App">
      <Header data={data} setData={setData} />
      <ContactList data={data} />
    </div>
  );
}

export default App;
