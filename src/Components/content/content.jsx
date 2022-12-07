import React from "react";
import "./style.css";
import { FaHamburger } from "react-icons/fa";
import img from "./img/smile1.svg";
import img1 from "./img/smile2.svg";
import img2 from "./img/smile3.svg";
import img3 from "./img/smile4.svg";
import img4 from "./img/smile5.svg";
import info from "./img/info.svg";
import arcavisa from "./img/arcavisa.svg";
import ogidram from "./img/ogidram.png";
import yoomoney from "./img/yoomoney.png";
import { Switch } from "antd";
import { useState, useRef, useEffect } from "react";
const Content = (props) => {
  const [switchh, setSwitchh] = useState(false);
  const [smileOne, setSmileOne] = useState(false);
  const [smileyTwo, setSmileyTwo] = useState(false);
  const [smileyThree, setSmileyThree] = useState(false);
  const [smileyFour, setSmileyFour] = useState(false);
  const [smileyFive, setSmileyFive] = useState(false);
  const [niceAtmosphere, setNiceAtmosphere] = useState(false);
  const [deliciousFood, setDeliciousFood] = useState(false);
  const [goodService, setGoodService] = useState(false);
  const useref = useRef();
  const comment = useRef();
  useEffect(() => {
    props.setTip(1000)
    useref.current.value=1000
  }, []);
  const defaultTip = [300, 500, 1000, 2000];
  const onChange = () => {
    setSwitchh(!switchh);
    props.setTransaction(switchh);
  };
  const SmileOne = () => {
    setSmileOne(!smileOne);
    if (smileOne === false) {
      setSmileyTwo(false);
      setSmileyThree(false);
      setSmileyFour(false);
      setSmileyFive(false);
    }
  };
  const SmileyTwo = () => {
    setSmileyTwo(!smileyTwo);
    if (smileyTwo === false) {
      setSmileOne(false);
      setSmileyThree(false);
      setSmileyFour(false);
      setSmileyFive(false);
    }
  };
  const SmileyThree = () => {
    setSmileyThree(!smileyThree);
    if (smileyThree === false) {
      setSmileOne(false);
      setSmileyTwo(false);
      setSmileyFour(false);
      setSmileyFive(false);
    }
  };
  const SmileyFour = () => {
    setSmileyFour(!smileyFour);
    if (smileyFour === false) {
      setSmileOne(false);
      setSmileyTwo(false);
      setSmileyThree(false);
      setSmileyFive(false);
    }
  };
  const SmileyFive = () => {
    setSmileyFive(!smileyFive);

    if (smileyFive === false) {
      setSmileOne(false);
      setSmileyTwo(false);
      setSmileyThree(false);
      setSmileyFour(false);
    }
  };
  const NiceAtmosphere = () => {
    setNiceAtmosphere(!niceAtmosphere);
  };
  const DeliciousFood = () => {
    setDeliciousFood(!deliciousFood);
  };
  const GoodService = () => {
    setGoodService(!goodService);
  };
  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };

  return (
    <div id="Content">
      <div id="leave_tip">
        <p>Թողնել թեյավճար</p>
      </div>
      <div id="money">
        <span>֏</span>
        <span id="span">max 50000֏</span>
        <input
          id="input"
          placeholder="մուտքագրեք գումարը՝"
          type="number"
          ref={useref}
          onChange={() => {
          props.setTip(useref.current.value);
          }}
          style={props.tip==""?{fontSize:"12px"}:null}
        />
      </div>
      <div id="gumari_chap">
        {defaultTip.map((defaultTip, index) => (
          <button
            key={index}
            id="button"
            onClick={() => {
              useref.current.value = defaultTip;
              props.setTip(defaultTip);
            }}
            style={
              props.tip == defaultTip
                ? { backgroundColor: "#60d25e", color: "white" }
                : null
            }
          >
            {defaultTip}֏
          </button>
        ))}
      </div>
      <div id="bottom-text">
        {props.tip}֏ = {financial(props.tip / 395)}$, {props.tip}֏ ={" "}
        {financial(props.tip / 6.20)}₽
      </div>
      <div id="transaction">
        <p>Վճարել ամբողջ գումարը ներառյալ միջնորդավճարը 6,5%</p>
        <Switch
          id="switch"
          defaultChecked
          onChange={onChange}
          style={
            switchh
              ? {
                  backgroundColor: "white",
                  Color: "#d9d9d9",
                  border: " solid 2px #d9d9d9",
                }
              : { backgroundColor: "#60d25e" }
          }
        />
      </div>
      <div id="bottom_text_fee">
        <p style={switchh ? { display: "none" } : null}>
          Ձեր քարտային հաշվից կգանձվի {Math.round(props.tip * 0.065)} AMD
        </p>
      </div>
      <div id="smiles">
        <div
          style={
            smileOne
              ? { border: "solid 1px #60d25e " }
              : { border: "solid 1px white" }
          }
        >
          <img src={img} alt="..." onClick={SmileOne} />
        </div>
        <div
          style={
            smileyTwo
              ? { border: "solid 1px #60d25e " }
              : { border: "solid 1px white" }
          }
        >
          <img src={img1} alt="..." onClick={SmileyTwo} />
        </div>
        <div
          style={
            smileyThree
              ? { border: "solid 1px #60d25e " }
              : { border: "solid 1px white" }
          }
        >
          <img src={img2} alt="..." onClick={SmileyThree} />
        </div>
        <div
          style={
            smileyFour
              ? { border: "solid 1px #60d25e " }
              : { border: "solid 1px white" }
          }
        >
          <img src={img3} alt="..." onClick={SmileyFour} />
        </div>
        <div
          style={
            smileyFive
              ? { border: "solid 1px #60d25e " }
              : { border: "solid 1px white" }
          }
        >
          <img src={img4} alt="..." onClick={SmileyFive} />
        </div>
      </div>
      <div
        style={
          smileOne || smileyTwo || smileyThree || smileyFour || smileyFive
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <div id="review-types">
          <button
            id="niceAtmosphere"
            onClick={NiceAtmosphere}
            style={
              niceAtmosphere
                ? { border: "1px solid #60d25e", backgroundColor: "white" }
                : null
            }
          >
            <p>Հաճելի մթնոլորտ</p>
          </button>
          <button
            id="niceAtmosphere"
            onClick={DeliciousFood}
            style={
              deliciousFood
                ? { border: "1px solid #60d25e", backgroundColor: "white" }
                : null
            }
          >
            <FaHamburger />
            <p>Համեղ սնունդ</p>
          </button>
          <button
            id="goodService"
            onClick={GoodService}
            style={
              goodService
                ? { border: "1px solid #60d25e", backgroundColor: "white" }
                : null
            }
          >
            <p>Լավ սպասարկում</p>
          </button>
        </div>
        <div id="comment">
          <input
            type="text"
            placeholder="Թողեք Ձեր մեկնամաբանությունը"
            ref={comment}
          />
        </div>
      </div>
      <div id="cards">
        <img src={info} alt="..." />
        <img src={arcavisa} alt="..." id="arcavisa" />
        <img src={ogidram} alt="..." id="ogidram" />
        <img src={yoomoney} alt="..." id="yoomoney" />
      </div>
      <div id="terms">
        <p>
          Կատարելով այս վճարումը դուք համաձայնվում եք մեր ծառայության{" "}
          <a target="blanc" href="https://tips.am/terms-and-conditions.pdf">
            {" "}
            պայմանների և դրույթների
          </a>{" "}
          հետ{" "}
        </p>
      </div>
    </div>
  );
};
export default Content;
