import React, { useState } from "react";
import "./style.css";
// import {Car} from'./content/content';
import vector from "./img/Vector.png";
import vector1 from "./img/1.png";
import vector2 from "./img/2.png";
import vector3 from "./img/3.png";
import vector4 from "./img/4.png";
import vector5 from "./img/5.png";
import vector6 from "./img/6.png";
import x from "./img/x.png";
import card from "./img/card.svg";
import rus from "./img/rus.svg";
import ogidram from "./img/ogidram.png";
const Footer = (props) => {
  const [button, setButton] = useState(false);
  const active = () => {
    setButton(!button);
  };
  console.log(props.switc);
  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };
  console.log(button);
  return (
    <div id="footer">
      <button
        id="tip_button"
        style={
          Number(props.tip) < 300 || Number(props.tip) > 50000
            ? { opacity: ".5" }
            : null
        }
        disabled={
          Number(props.tip) < 300 || Number(props.tip) > 50000 ? true : false
        }
        onClick={active}
      >
        Վճարել
      </button>
      <div
        id="payments_modal_content"
        style={
          button && Number(props.tip) > 299 && Number(props.tip) < 50001
            ? { height: "316px" }
            : { height: "0px" }
        }
      >
        <div className="modal_amount_">
          <div className="modal_amount">
            <p>
              Ընդհանուր: ֏{" "}
              {props.transaction? Number(Math.round(props.tip * 0.065)) + Number(props.tip):Number(props.tip)}
            </p>
            <button onClick={active}>
              <img src={x} />
            </button>
          </div>
          <div className="modal_amount_rate">
            {" "}
            ${" "}
            {financial(
              (Number(props.tip) + Number(Math.round(props.tip * 0.065))) / 395
            )}{" "}
            |{" "}
            {financial(
              (Number(Math.round(props.tip * 0.065)) + Number(props.tip)) / 6.2
            )}
            ₽
          </div>
          <a
            target="blanc"
            href="https://ipay.arca.am/payment/merchants/22533421/payment_en.html?mdOrder=0f29cbaa-0954-46ba-930a-2aaf43e1a1cc"
          >
            <button className="tip_button tip_button_card">
              <img src={card} alt="..." />
              <p>Վճարել քարտով</p>
            </button>
          </a>
          <a href="https://yoomoney.ru/checkout/payments/v2/contract/bankcard?orderId=2b1d6cdf-000f-5000-8000-18c45fca85e0">
            <button className="tip_button tip_button_rus_card">
              <img src={rus} alt="..." />
              <p>Ռուսական քարտով</p>
            </button>
          </a>
          <div className="side_by_side">
            <button className="tip_button tip_button_idram">
              <img src={ogidram} alt="..." />
            </button>

            <button className="tip_button tip_button_yoomoney">
              <img src={vector} alt="..." />
              <img src={vector1} alt="..." />
              <img src={vector2} alt="..." className="imgg" />
              <img src={vector3} alt="..." />
              <img src={vector4} alt="..." />
              <img src={vector5} alt="..." />
              <img src={vector6} alt="..." />
            </button>
          </div>
          <div className="terms">
            Կատարելով այս վճարումը դուք համաձայնվում եք մեր ծառայության{" "}
            <a target="blanc" href="https://tips.am/terms-and-conditions.pdf">
              պայմանների և դրույթների
            </a>{" "}
            հետ
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
