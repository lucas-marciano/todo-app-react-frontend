import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Grid from "../template/grid"
import IButton from "../template/buttons/iconButton"
import { add, changeDescription, search, clear } from "./actions"

class TodoForm extends Component{
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount(){
    this.props.search()
  }

  keyHandler(event){
    const { add, search, description, clear } = this.props

    if (event.key === "Enter") {
      event.shiftKey ? search() : add(description)
    } else if (event.key === "Escape") {
      clear()
    }
  }

  render(){
    const { add, search, description, clear } = this.props

    return (
      <div role="form" className="todo_form">
      <Grid cols="12 9 10">
        <input
          id="description"
          onChange={this.props.changeDescription}
          className="form-control"
          type="text"
          onKeyUp={this.keyHandler}
          placeholder="Press Enter to Insert | Press Shift + Enter to search | Press Escape to clear Search"
          value={this.props.description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IButton style="primary" icon="plus" onClick={() => add(description)} />
        <IButton style="info" icon="search" onClick={search} />
        <IButton style="default" icon="close" onClick={() => clear()} />
      </Grid>
    </div>
    )
  }

}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({changeDescription, search, add, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)