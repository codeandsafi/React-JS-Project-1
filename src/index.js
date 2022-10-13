import React from "react";

import ReactDOM from "react-dom";

import "./index.css";

ReactDOM.render(<>
  <div className="body">
  <div className="element">

  {/* heading */}
  <div className="heading">REGISTRATION FORM</div>

  {/* name input section */}
  <div className="name">
  <label htmlFor="fName" className="label">First Name</label><br/>
  <input id="fName" className="input-field-name"></input>
  </div>
  <div className="name">
  <label htmlFor="lName" className="label">First Name</label><br/>
  <input id="lName" className="input-field-name"></input>
  </div>

  {/* email input section */}
  <div className="innerDiv">
  <label htmlFor="email" className="label">Email Address</label><br/>
  <input id="email" className="input-field"></input>
  </div>

  {/* gender input section */}
  <div className="innerDiv">
  <label htmlFor="gender" className="label">Gender</label><br/>
  <input id="gender" className="input-field"></input>
  </div>

  {/* city input section */}
  <div className="innerDiv">
  <label htmlFor="city" className="label">City</label><br/>
  <input id="city" className="input-field"></input>
  </div>

  {/* country input section */}
  <div className="innerDiv">
  <label htmlFor="country" className="label">Country</label><br/>
  <input id="country" className="input-field"></input>
  </div>

  {/* register button */}
  <div className="innerDiv">
  <button className="btn">REGISTER NOW</button>
  </div>
  </div>
  </div>
</>,
document.getElementById("root"));
