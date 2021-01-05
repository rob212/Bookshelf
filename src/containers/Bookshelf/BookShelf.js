import {React, Component} from 'react'
import Book from '../../components/Book/Book'

import './BookShelf.css'

class BookShelf extends Component {
  render() {
  const books = this.props.books.map(book => <li key={book.title}><Book title={book.title} /></li>)
  return <ul>{books}</ul>
  }
}

export default BookShelf


