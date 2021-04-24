import React from "react";
import "./Header.css";
import ListItem from "./list-item/ListItem";
// import lion from "./image/lion.png"

const menu = ["Home", "About", "Product", "Contact"];

const Header = () => {
  return (
    <div className="headList">
        <nav className="background-rad">
          <ul className="list">
            {menu.map((item, index) => {
              return <ListItem key={index} name={item} />;
            })}
          </ul>
        </nav>
      </div>
  );
};
export default Header;
