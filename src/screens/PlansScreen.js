import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className="plansScreen">
      <h4>Renewal date: </h4>

      <div className="plansScreen_Basic">
        <h5>
          Netflix Basic <br /> <span>480p</span>
        </h5>
        <button>Subscribe</button>
      </div>

      <div className="plansScreen_Standard">
        <h5>
          Netflix Standard <br /> <span>720p</span>
        </h5>
        <button>Subscribe</button>
      </div>

      <div className="plansScreen_Premium">
        <h5>
          Netflix Premium <br /> <span>4K+HDR</span>
        </h5>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
