import React from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.onCheckDelete(props.id);
      }}
    >
      <li>{props.Text}</li>
    </div>
  );
}
export default TodoItem;
