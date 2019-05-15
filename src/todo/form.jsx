import React from "react";
import Grid from "../template/grid";
import IButton from "../template/buttons/iconButton";

export default props => (
  <div role="form" className="todo_form">
    <Grid cols="12 9 10">
      <input
        id="description"
        onChange={props.handleChange}
        className="form-control"
        type="text"
        placeholder="Add a new task"
        value={props.description}
      />
    </Grid>
    <Grid cols="12 3 2">
      <IButton style="btn btn-primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);
