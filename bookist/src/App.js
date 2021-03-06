
import React, {Component} from 'react'
import './App.css';
import data from './data'
import Booklist from './Components/Booklist'
import Header from './Components/Header';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }
  addBook = (title) => {
    this.setState({ shelf: [ ...this.state.shelf, title]})
    }
  handleClear = () => {
      this.setState({shelf: []})
      }
  filterTitle = (input) => {
      let filteredTitle = [];
        this.state.books.filter(element => {
          if (element.author.includes(input) || element.title.includes(input)){
            filteredTitle.push(element)
          }
          return filteredTitle
        })
        this.setState({books: filteredTitle})
      }
  clear = () => {
      this.setState({books: data})
      }
      render(){
        return (
          <div className="App">
            <Header />
            <SearchBar filter={this.filterTitle} clear={this.clear}/>
            <section className='seperator'>
            <Booklist books={this.state.books} add={this.addBook}/>
            <Shelf shelf={this.state.shelf} handleClear={this.handleClear}/>
            </section>
            </div>
        )
      }
    }
export default App;
