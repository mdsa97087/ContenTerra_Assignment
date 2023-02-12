import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css"


const getData = () => {
  return axios.get(`https://www.reddit.com/r/reactjs.json`);
};

function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data.data.children);
        console.log(res.data.data.children);
      })
      .catch((err) => {
        console.log("Err:-", err);
      });
  }, []);

  return (
    <div className="mainDiv">
      {data.map((el) => (
        <div className="childDiv" key={el.data.id}>
          <h3>Title:- {el.data.title}</h3>
          <br />
          <p>SelfText_HTML:- {el.data.selftext_html}</p>
          <br />
          <a href={el.data.url}>URL</a>
          <br />
          <br />
          <h4>Score:- {el.data.score}</h4>
        </div>
      ))}
    </div>
  );
}

export default Cart;
