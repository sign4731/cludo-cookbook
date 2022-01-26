import React, { useState } from "react";
import "./show-btn.css";

export default function ResultCountElm() {
  const accordionData = {
    title: "FIRSTYour search for 'x' returned 6530 results",
    HTMLcontent: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    CSScontent: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    JScontent: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="template-element">
        <div className="example">{accordionData.title}</div>
        <button className="show-btn" onClick={() => setIsActive(!isActive)}>
          Show <span className={"arrow" + (isActive ? " open" : " ")}></span>
        </button>
      </div>

      <div
        className="accordion-content"
        style={{ display: isActive ? " " : "none" }}
      >
        <div className="html-box">
          <h4>HTML</h4>
          <p>{accordionData.HTMLcontent}</p>
        </div>

        <div className="css-box">
          <h4>Styles</h4>
          <p>{accordionData.CSScontent}</p>
        </div>

        <div className="js-box">
          <h4>JS/CSHTML</h4>
          <p>{accordionData.JScontent}</p>
        </div>
      </div>
    </div>
  );
}
