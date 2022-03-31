import { NavLink } from "react-router-dom";

import "./style.scss";

const Productors = (props) => {
  return (
    <div className="productors__container">
      {props.props.map((item) => (
        <img
          className="productor"
          src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
          alt="logo"
        />
      ))}
    </div>
  );
};

export default Productors;
