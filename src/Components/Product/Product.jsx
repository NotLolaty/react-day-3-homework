import React, { useEffect, useState } from "react";
import matras from "../../assets/matras.svg";
import { Modal } from "../Modal/Modal";
import "../../main.css";

export const Product = ({ props }) => {
  const { active, setActive } = props;
  const nav = [
    {
      name: "Все",
      path: "все",
    },
    {
      name: "Модель А",
      path: "модельа",
    },
    {
      name: "Модель А+",
      path: "модельа",
    },
    {
      name: "Модель Б+",
      path: "модельб",
    },
    {
      name: "Модель С",
      path: "модельс",
    },
    {
      name: "Модель С+",
      path: "модельс",
    },
    {
      name: "Модель Д",
      path: "модельд",
    },
    {
      name: "Модель Евро",
      path: "модельевро",
    },
    {
      name: "Новые Товары",
      path: "новыетовары",
    },
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1212/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <ul>
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <a href="/">{item.name}</a>
            </li>
          );
        })}
      </ul>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <img src={matras} alt={item.category} />
              <div>
                <h3>{item.name}</h3>
                <ul>
                  <li>{item.weight}</li>
                  <li>{item.capacity}</li>
                  <li>{item.size}</li>
                  <li>{item.warranty}</li>
                </ul>
                <button onClick={() => setActive(!active)}>
                  Buyurtma berish
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Modal active={active} />
    </div>
  );
};
