import producto from "../img/Product.png";
import React, { useState } from "react";
import { ImHeart } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Producto() {
  return (
    <div className="container">
      <div className="decoracion">
        <div className="container_botton">
          <button className="favoritos">
            <ImHeart className="heart" />
            <p>22</p>
          </button>
          <button className="descuento">
            <p>-30%</p>
          </button>
        </div>
        <div className="container_img">
          <img src={producto} className="producto_img" alt="" />
        </div>
        <div className="descripcion">
          <div className="descripcion_superior">
            <div className="left">
              <h2>Citrate Mag</h2>
            </div>
            <div className="right">
              <h2>
                $<span>273.00</span>
              </h2>
            </div>
          </div>
          <div className="descripcion_inferior">
            <div className="left">
              <p className="descripcion_texto">240 Cápsulas | 800 Mg</p>
            </div>
            <div className="right">
              <p className="descripcion_cantidad">$134.00</p>
            </div>
          </div>
          <div className="stars">
            <Rating />
          </div>
        </div>
      </div>
      <div className="agregar">
        <div className="redes">
          <div className="compartir">
            <h3 className="compartir__title">Comparte</h3>
            <div className="social-icons">
              <ul>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </ul>
            </div>
          </div>
          <button>
            <h2>Agregar</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

// <!---------------------------------------------! >
// <!----Componente de ecalificación de estrellas-! >
// <!----------------------------------------------! >
const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={value <= rating ? "star filled" : "star"}
          onClick={() => handleClick(value)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};
