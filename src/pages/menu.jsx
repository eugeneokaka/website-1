import { arr } from "./data";
import "./menu.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// console.log(arr);
// let im = arr[0].url;

import i from "../assets/tea.jpg";
import Nav from "../components/nav";
import { useState } from "react";
function Menu() {
  const [searchterm, setserchterm] = useState("");
  const [show, setshow] = useState(false);
  const [urls, seturls] = useState(true);
  const [ingr, setingr] = useState(true);
  const [title, settitle] = useState(true);
  const func = (item) => {
    setshow(!show);
    seturls(item.url);
    setingr(item.ingr);
    settitle(item.name);
  };
  return (
    <div className="menu">
      <Nav />
      <input
        type="text"
        placeholder="search"
        onChange={(event) => setserchterm(event.target.value)}
      />
      <h1>menu</h1>
      {/* <img src="../public/tea.jpg" alt="" /> */}
      {show ? (
        <div className="parent">
          <div className="child">
            <img loading="lazy" src={urls} alt="" />
            <h3>{title}</h3>
          </div>

          <div className="child1">
            <h3>ingridients</h3>

            <p>{ingr}</p>
            <button
              onClick={() => {
                setshow(!show);
              }}
            >
              back
            </button>
          </div>
        </div>
      ) : (
        <div className="grid">
          {arr
            .filter((val) => {
              if (searchterm == "") {
                return val;
              } else if (
                val.name
                  .toLocaleLowerCase()
                  .includes(searchterm.toLocaleLowerCase())
              )
                return val;
            })

            .map((item, index) => {
              if (index >= 4) {
                return;
              }
              return (
                <div className="item" key={index}>
                  {/* <img
                    loading="lazy"
                    src={item.url}
                    alt=""
                    onClick={() => func(item)}
                  /> */}
                  <LazyLoadImage
                    key={item.name}
                    src={item.url}
                    effect="blur"
                    placeholderSrc={item.url}
                    onClick={() => func(item)}
                  />

                  <p>{item.name}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Menu;
