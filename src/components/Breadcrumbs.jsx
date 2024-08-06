/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style.css";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <a href="#">Главная</a>
      <img src="../img/akar.svg" alt="акариконка" />
      <a href="#">Список сотрудников</a>
      <img src="../img/akar.svg" alt="акариконка" />
      <a href="#">Дмитриев Игорь Степанович</a>
    </div>
  );
}

export default Breadcrumbs;
