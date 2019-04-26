import React from "react";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Title from "./components/Title"
import TodoItem from "./components/TodoItem"
import Clock from "./components/Clock"

import style from "./style.css"

function App() {
  return(
    <div className="todo-list">
      <Nav />
      <Title />
      <Clock />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Footer />
    </div>
  )
}

export default App
