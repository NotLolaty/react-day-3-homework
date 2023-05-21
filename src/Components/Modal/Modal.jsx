import React, { useEffect, useReducer, useState } from "react";

export function Modal({ active }) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState([1]);
  useEffect(() => {
    fetch("http://localhost:1212/api/products")
      .then((res) => res.json())
      .then((data) => setData(data.categories))
      .catch((error) => console.log(error));
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    fetch();
  }
  return (
    <div className={active ? "open-modal modal" : "modal"}>
      <button>X</button>
      <h3>Buyurtma qilish</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ваше имя..." required />
        <input type="tel" placeholder="Ваш телефон..." required />
        <label>
          <select>
            {data.map((item) => {
              return <option value={item.category}>{item.category}</option>;
            })}
          </select>
        </label>
        <div>
          <button
            onClick={() => (count >= 0 ? setCount(count - 1) : setCount(1))}
          >
            -
          </button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button>SEND</button>
      </form>
    </div>
  );
}
