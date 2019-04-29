import React from "react";

const Conditional = (props) => {
  console.log(props)
  if (props.isLoading) {
    return(
      <h1>Loading...</h1>
      )
    } else {
      return(
        <h1>Loaded</h1>
    )
  }
}

export default Conditional
