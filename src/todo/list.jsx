import React from "react";
import IButton from "../template/buttons/iconButton";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <IButton
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo._id)}
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
