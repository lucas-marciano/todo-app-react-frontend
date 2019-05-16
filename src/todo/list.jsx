import React from "react";
import IButton from "../template/buttons/iconButton";

export default props => {
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
            onClick={() => props.handleRemove(todo)}
          />

          <IButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}
          />

          <IButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.handleEntTask(todo)}
          />
        </td>
      </tr>
    ));
  };

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
  );
};
