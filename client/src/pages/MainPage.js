import mainImage from '../image/mainPage/mainPage.jpg';
import './mainPage.css'
import React, { useEffect } from "react";
import Header from "../components/header/header";
const MainPage = ({form}) => {


  const onActiveForm = (e) => {
    form(() => e.target.getAttribute("data-open"));
  };

   

  /**Animation */
  useEffect(() => {
    reveal(); // виклик функції при рендерингу компонента
  });
   
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();
  /**Animation */

  return (
    <>
      <Header form={form} />
      <main className="mainPage ">
        <div className="mainPage__overlay"></div>
        <img
          src={mainImage}
          className="mainPage__img"
          alt="House in mountain"
        />
        <div className="mainPage__nav reveal">
          <p className="dream">Dream House</p>
          <p className="better">Краще не знайдеш</p>
        </div>
      </main>
    </>
  );
}

export default MainPage;