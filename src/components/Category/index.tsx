import { NavLink } from "react-router-dom";
import "./style.scss";

const Category = (props) => {
  return (
    <>
      <div className="category__container">
        {props.props.map((item) => (
          <div className="category__icon">
            <NavLink to="/">
              <h6 className="category">{item.name}</h6>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
