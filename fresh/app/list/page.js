"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["tomato", "pasta", "coconut"];
  let [number, setNumber] = useState(0);

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img className="food-img" src={`/food${i}.png`} alt={`${i}`} />
            <h4>{a} #40</h4>
            <span>{number}</span>
            <button
              onClick={() => {
                setNumber(number + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setNumber(number - 1);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
