import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";

import React from "react";
import Menu from "../template/menu";
import Routes from "./router"

export default props => (
  <div>
    <Menu />
    <div className="container">
      <Routes/>
    </div>
  </div>
);
