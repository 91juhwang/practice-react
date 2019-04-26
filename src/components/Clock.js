import React from "react";

const Clock = () => {
  const date = new Date();
  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <h2>
      It is currently {time}.
    </h2>
  )
}

export default Clock
