import React, { Component } from "react";
import axios from "axios";

import Header from "../template/page_header";
import Form from "./form";
import List from "./list";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: "", list: [] }
    this.refresh()

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleEntTask = this.handleEntTask.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  render() {
    return (
      <div>
        <Header name="Tasks" small="Form" />

        <Form
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <List
          list={this.state.list}
          handleEntTask={this.handleEntTask}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(result => this.setState({ ...this.state, description, list: result.data }))
      .catch(err => console.log("Do not work! " + err) )
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description })
      .then(result => this.refresh())
      .catch(err => console.log("Do not work! " + err));
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(result => this.refresh(this.state.description) )
      .catch(err => console.log("Do not work! handleRemove " + err))
  }

  handleEntTask(todo) {
    axios.put(`${URL}/${todo._id}`, { done: true })
    .then(resp => this.refresh(this.state.description))
    .catch(err => console.log("Do not work! handleEntTask " + err))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { done: false })
      .then(result => this.refresh(this.state.description))
      .catch(err => console.log("Do not work! handleMarkAsPending " + err))
  }

  handleSearch(){
    this.refresh(this.state.description)
  }

  handleClear(){
    this.refresh()
  }
}
