import React from "react";
import Grid from "../template/grid";
import IButton from "../template/buttons/iconButton";

export default props => {
  const keyHandler = (event) => {
    if (event.key === "Enter") {
      event.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (event.key === "Escape") {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todo_form">
      <Grid cols="12 9 10">
        <input
          id="description"
          onChange={props.handleChange}
          className="form-control"
          type="text"
          onKeyUp={keyHandler}
          placeholder="Press Enter to Insert | Press Shift + Enter to search | Press Escape to clear Search"
          value={props.description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IButton style="primary" icon="plus" onClick={props.handleAdd} />
        <IButton style="info" icon="search" onClick={props.handleSearch} />
        <IButton style="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  )
}
