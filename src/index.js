import React, { useState } from "react";
import ReactDOM from "react-dom";

import star from "../src/icon-star.svg";
import thanks from "../src/illustration-thank-you.svg";

import "./style.css";

let num = 0;

function App() {
  const [didNotSubmit, setDidNotSubmit] = useState(true);

  function submitRating() {
    return setDidNotSubmit(false);
  }

  function handleClick(e) {
    e.currentTarget.classList.toggle("rating-clicked-color");
    num = e.currentTarget.innerText;
    return num;
  }

  return didNotSubmit ? (
    <div class="card question">
      <section>
        <img class="star-img" src={star} alt="star"></img>
      </section>
      <section>
        <h1>How did we do?</h1>
      </section>
      <section>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </section>
      <section class="ratings">
        <div onClick={handleClick} class="rating">
          1
        </div>
        <div onClick={handleClick} class="rating">
          2
        </div>
        <div onClick={handleClick} class="rating">
          3
        </div>
        <div onClick={handleClick} class="rating">
          4
        </div>
        <div onClick={handleClick} class="rating">
          5
        </div>
      </section>
      <section>
        <button onClick={submitRating} type="submit">
          Submit
        </button>
      </section>
    </div>
  ) : (
    <div class="card response">
      <section>
        <img src={thanks} alt=""></img>
      </section>
      <section>
        <p class="selected">You selected {num} out of 5</p>
      </section>
      <section>
        <h1>Thank you!</h1>
      </section>
      <section>
        <p class="message">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
