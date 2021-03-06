import {Component} from 'react';
import '../App.css';
class BookList extends Component {
    render(){
        let mappedBooks = this.props.books.map((book, key) => (
            <p className="book-text" key={key}>
            <img className = 'book-picture'src={book.img} alt='books' onClick={() => this.props.add(book.title)}/> 
            {book.title} by {book.author}</p>
        ))

        return (
            <div className="book-list">
                {mappedBooks}
            </div>
        )
    }
}

export default BookList;