import { useState } from "react";
import "./styles.css";

const carDict = {
  offroad: [
    {
      brand: "Landrover",
      name: "Defender",
      rating: "5/5",
      desc:
        "One of the best offroader on the planet,First model released on 1983 by LandRover"
    },
    {
      brand: "Ford",
      name: "bronco",
      rating: "4.75/5",
      desc:
        " It is the first suv ever made by ford in 1966 and new model was released on 2020"
    },
    {
      brand: "Mercdes-Benz",
      name: "G63",
      rating: "4.5/5",
      desc:
        "One of the best offroader and luxury suv from Mercdes and it was first produced in 1979"
    }
  ],

  trucks: [
    {
      brand: "Ford",
      name: "F-150 Raptor",
      rating: "5/5",
      desc:
        "F-150 is the best american truck since 1975 but this raptor is more rugged and more offroad focused truck"
    },
    {
      brand: "Rivian",
      name: "R1t",
      rating: "4.5/5",
      desc:
        "New in market and only available electric truck to purchase and most powerful truck in all aspects, backed by jeffbezos"
    },
    {
      brand: "Chevrolet",
      name: "silverado",
      rating: "4.25/5",
      desc:
        "Silverado is one of the best truck from chevy and it is direct completitor with f-150, Ram and Toyota Tundra"
    }
  ],

  supercars: [
    {
      brand: "koenigsegg",
      name: "jesko",
      rating: "5/5",
      desc:
        "It is one of the most powerful production car from koenigsegg which can go aganist bugatti chiron super sport and it is powered by 5 litre twin turbo v8 engine from koenigsegg"
    },
    {
      brand: "Ferrari",
      name: "F8",
      rating: "4.5/5",
      desc:
        "It is 3rd mid engine car from ferrari and it is powered by 3.9L v8 making 710hp and 770nm"
    },
    {
      brand: "maserati",
      name: "mc20",
      rating: "4.5/5",
      desc:
        "mc20 is the first supercar from maserati and first car to come with their own engine and it produces 621hp"
    }
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
                <div style={{ fontSize: "small" }}> {item1.rating} </div>
                <div style={{ fontSize: "smaller" }}> {item1.desc} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
