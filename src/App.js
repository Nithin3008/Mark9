import { useState } from "react";
import "./styles.css";

const carDict = {
  offroad: [
    { brand: "Landrover", name: "Defender", rating: "5/5" },
    { brand: "Ford", name: "bronco", rating: "4.75/5" },
    { brand: "Mercdes-Benz", name: "G63", rating: "4.5/5" }
  ],

  trucks: [
    { brand: "Ford", name: "F-150 Raptor", rating: "5/5" },
    { brand: "Rivian", name: "R1t", rating: "4.5/5" },
    { brand: "Chevrolet", name: "silverado", rating: "4.25/5" }
  ],

  supercars: [
    { brand: "koenigsegg", name: "jesko", rating: "5/5" },
    { brand: "Ferrari", name: "488", rating: "4.5/5" },
    { brand: "maserati", name: "mc20", rating: "4.5/5" }
  ]
};
var car1 = Object.keys(carDict);
export default function App() {
  var [body, setBody] = useState("supercars");
  function bodyhandler(item) {
    body = item;
    setBody(body);
  }
  return (
    <div className="App">
      <h1> 🚗 car-recomendation </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite cars. Select a body style to Checkout{" "}
      </p>
      {car1.map(function (item) {
        return (
          <button
            onClick={() => bodyhandler(item)}
            style={{
              cursor: "pointer",
              background: "#ea580c",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {item}
          </button>
        );
      })}
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {carDict[body].map(function (item1) {
            return (
              <li
                key={item1.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  background: "#fed7aa",
                  border: "1px solid #D1D5DB",
                  width: "60%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {item1.brand} </div>
                <div style={{ fontSize: "large" }}> {item1.name} </div>
                <div style={{ fontSize: "smaller" }}> {item1.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
