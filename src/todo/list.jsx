import React from "react";
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import IButton from "../template/buttons/iconButton";
import { markAsDone, markAsPending, remove } from "./actions"

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'done' : ''}>{todo.description}</td>
        <td>
          <IButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.remove(todo)}
          />

          <IButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.markAsPending(todo)}
          />

          <IButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.markAsDone(todo)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th className="table_actions">Actions</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)