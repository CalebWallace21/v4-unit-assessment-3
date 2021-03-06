import React, {Component} from 'react'
import '../App.css';
import data from '../data'
import BookItems from './BookItems'
import Shelf from './Shelf'
class Booklist extends Component {
    constructor(){
        super()
        this.state = {
            books: data,
            shelf: []
        }
        console.log('shelf', this.state.shelf)
    this.addToShelf = this.addToShelf.bind(this)    
    }
    

addToShelf (){
    let bookTitle = this.state.books.map(maps => {
    bookTitle = maps.title
    this.setState(prevState => ({
        shelf: [...prevState.shelf, bookTitle]
    }))
    })

}
    render(){
        // const addBook = this.addToShelf()
        const mappedBooks = this.state.books.map(book => {
        return <BookItems key={book.id} book={book} title={this.addToShelf} />
      })
    //   const mappedTitles = this.state.shelf.map(shelfs => {
    //       return <Shelf shelfs = {shelfs} />
    //   })
      
      return (
          <div className="book-list">
              {mappedBooks}
              {/* {addBook} */}
              {/* {mappedTitles}         */}
          </div>

      )
    }
}

export default Booklist