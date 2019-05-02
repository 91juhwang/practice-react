import React, {Component} from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Title from "./components/Title"
import TodoItem from "./components/TodoItem"
import Clock from "./components/Clock"
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import Product from "./components/Product"
import Conditional from "./components/Conditional"
import MemeGenerator from "./components/MemeGenerator"

import jokesData from "./constants/jokesdata"
import contacts from "./constants/contacts"
import productData from "./constants/productData"
import todoData from "./constants/todoData"

import style from "./style.css"

const jokeComponents = jokesData.map(joke => <Joke question={joke.question} punchline={joke.punchline} key={joke.id} />)
const contactComponents = contacts.map(contact => {
  return(
    <ContactCard
      key={contact.id}
      name={contact.name}
      imageUrl={contact.imageUrl}
      email={contact.email}
      phone={contact.phone}
    />
  )
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData,
      isLoading: true,
      character: {},
      firstName: "",
      lasttName: "",
      email: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          character: data,
        })
      })
  }

  handleTextChange(event) {
    const {name, value} =  event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    const productComponents = productData.map(product => {
      return(
        <Product
          key={product.id}
          name={product.name}
        />
      )
    })

    const TodoItemComponents = this.state.todos.map(item => {
      return(
        <TodoItem
          key={item.id}
          item={item}
          handleChange={this.handleChange}
        />
      )
    })

    return (
      <div className="todo-list">
        <Conditional isLoading={this.state.isLoading} />
        <Nav />
        <Title />
        <Clock />
        <MemeGenerator />
        <form>
          <input type="text" value={this.state.firstName} name="firstName" placeholder="text" onChange={this.handleTextChange}></input>
          <br />
          <input type="text" value={this.state.lastName} name="lastName" placeholder="text" onChange={this.handleTextChange}></input>
          <br />
          <input type="text" value={this.state.email} name="email" placeholder="text" onChange={this.handleTextChange}></input>
          <br />
          <h1>
            {this.state.firstName}
            {this.state.lastName}
            {this.state.email}
          </h1>
        </form>
        {this.state.character.name}
        {TodoItemComponents}
        <Footer />
        {contactComponents}
        {jokeComponents}
        {productComponents}
      </div>
    )
  }
}

export default App
