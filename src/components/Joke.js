import React from "react";

const Joke = (props) => {
  return(
    <div>
      <h4 style={{display: props.question ? 'block' : 'none' }}>
        Question: {props.question}
      </h4>
      <h4 style={{display: props.punchline ? 'block' : 'none' }}>
        Punchline: {props.punchline}
      </h4>
    </div>
  )
}

export default Joke
