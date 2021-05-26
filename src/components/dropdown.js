import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./menuItems";
import "./dropdown.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function DropdownItem() {
  return (
    <>
      {MenuItems.map((item, index) => {
        return (
          <Dropdown.Item key={index}>
            <Link className={item.cName} to={item.path}>
              {item.title}
            </Link>
          </Dropdown.Item>
        );
      })}
    </>
  );
}
