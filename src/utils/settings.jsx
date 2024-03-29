const slideWidth = 30;

const _items = [
  {
    producto: {
      calificacion: "22",
      descuento: "30",
      nombre_producto: "240 Cápsulas | 800 Mg",
      img: "",
      precio: "",
      descripcion: "",
      precio_descripcion: "",
      comparte: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
    },
  },
  {
    producto: {
      calificacion: "22",
      descuento: "30",
      nombre_producto: "280 Cápsulas | 800 Mg",
      precio: "",
      descripcion: "",
      precio_descripcion: "",
      comparte: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
    },
  },
  {
    producto: {
      calificacion: "22",
      descuento: "30",
      nombre_producto: "240 Cápsulas | 800 Mg",
      precio: "",
      descripcion: "",
      precio_descripcion: "",
      comparte: "",
      facebook_link: "",
      twitter_link: "",
      instagram_link: "",
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <div className="container">
      <div className="decoracion">
        <div className="container_botton">
          <button className="favoritos">
            <ImHeart className="heart" />
            <p>{item.producto.calificacion}</p>
          </button>
          <button className="descuento">
            <p>{item.producto.descuento}%</p>
          </button>
        </div>
        <div className="container_img">
          <img src={item.producto.img} className="producto_img" alt="" />
        </div>
        <div className="descripcion">
          <div className="descripcion_superior">
            <div className="left">
              <h2>{item.producto.nombre_producto}</h2>
            </div>
            <div className="right">
              <h2>
                $<span>{item.producto.precio}</span>
              </h2>
            </div>
          </div>
          <div className="descripcion_inferior">
            <div className="left">
              <p className="descripcion_texto">{item.producto.descripcion}</p>
            </div>
            <div className="right">
              <p className="descripcion_cantidad">
                ${item.producto.precio_descripcion}
              </p>
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
            <h3 className="compartir__title">{item.producto.comparte}</h3>
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
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Carousel />, document.getElementById("root"));
