import React from "react";
import "./style.css";
import { ImLocation } from "react-icons/im";
import { HiStar } from "react-icons/hi";
import img from "./1.png";
import img_user from "./img.jpeg";
const Waiter = () => {
  return (
    <div id="waiter">
      <div id="img_user">
      <img src={img_user} />
        <div id="rate">
          <HiStar />
          <p id="reat_number">4.40</p>
        </div>
      </div>
      <div id="flex">
        <h1 id="user_name">Stepa</h1>
        <div id="cafeteria">
          <div id=""></div>
          <div id="locatuon">
            <ImLocation />
          </div>
          <p id="cafeteria_name">Cafeteria 1</p>
        </div>
        <div id="goal_title">
          <img src={img} id="target" />
          <p>HAPPY BDAY</p>
        </div>
        <div id="progress_bar">
          <div id="progress">
            <div id="progress_give"></div>
            <p>34%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Waiter;
