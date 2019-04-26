import React from "react";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Title from "./components/Title"
import TodoItem from "./components/TodoItem"
import Clock from "./components/Clock"
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import jokesData from "./constants/jokesdata"
import contacts from "./constants/contacts"

import style from "./style.css"

function App() {
  const jokeComponents = jokesData.map(joke => {
    return (
      <Joke question={joke.question} punchline={joke.punchline} key={joke.id} />
    )
  })

  const contactComponents = contacts.map(contact => {
    return (
      <ContactCard
        key={contact.id }
        name={contact.name}
        imageUrl={contact.imageUrl}
        phone={contact.phone}
        email={contact.email}
      />
    )
  })

  return(
    <div className="todo-list">
      <Nav />
      <Title />
      <Clock />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <Footer />
      {contactComponents}
      {jokeComponents}
    </div>
  )
}

export default App
