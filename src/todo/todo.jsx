import React, { Component } from "react"
import Header from "../template/page_header"
import Form from "./form"
import List from "./list"

export default props => (
  <div>
    <Header name="Tasks" small="Form" />
    <Form />
    <List />
  </div>
)
