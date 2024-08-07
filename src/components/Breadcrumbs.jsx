import React from "react";
import "../style.css";
import akar from "../img/akar.svg";
import { Link } from "react-router-dom";

function Breadcrumbs({ id, name }) {
  return (
    <div className="breadcrumbs">
      <Link to="#">Главная</Link>
      <img src={akar} alt="акариконка" />
      <Link to="/employee">Список сотрудников</Link>
      <img src={akar} alt="акариконка" />
      <Link to={`/employee/${id}`}>{name}</Link>
    </div>
  );
}

export default Breadcrumbs;
