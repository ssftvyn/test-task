/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style.css";
import akar from "../img/akar.svg";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <a href="#">Главная</a>
      <img src={akar} alt="акариконка" />
      <a href="#">Список сотрудников</a>
      <img src={akar} alt="акариконка" />
      <a href="#">Дмитриев Игорь Степанович</a>
    </div>
  );
}

export default Breadcrumbs;
