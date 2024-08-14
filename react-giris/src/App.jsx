import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Deneme from "./component/Deneme";
import DenemeClass from "./component/DenemeClass";
import { Button } from "./component/Button";
import UseBoolean from "./component/useBoolean";

function App() {
  const [count, setCount] = useState([]);

  const divRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [deger, setDeger] = useState("");
  const data = [
    {
      name: "zeynep",
      age: 18,
    },
    {
      name: "simge",
      age: 18,
    },
    {
      name: "barış",
      age: 34,
    },
  ];

  // useEffect(() => {
  //   console.log("Çalıştı");
  //   return () => {
  //     console.log("Destroyed");
  //   };
  // }, []);

  useEffect(() => {}, []);

  const { bool } = UseBoolean({ apiResponseState: 2 });

  const renderUI = (item, index) => {
    return item.age > 19 ? (
      <div key={index}>
        {item?.name}-{item?.age}
      </div>
    ) : null;
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleChange = (e) => {
    setDeger(e.target.value);
    divRef.current.style = "color:red";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value", deger);
    console.log("divRef", divRef);
    setIsLoading(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={deger} onChange={handleChange} />
        <button ref={divRef}>Gönder</button>
      </form>
      <button>{!isLoading ? "Submit" : "Dönüş Bekleniyor"}</button>
      <Button size="30" bgColor="red">
        Deneme
      </Button>
      {bool ? "deneme" : null}
      {/* {data && data?.map((item, index) => renderUI(item, index))}
      <div className="bg-green">Merhaba Dünya!</div>
      <Deneme handleIncrement={handleIncrement} /> */}
    </>
  );
}

export default App;
