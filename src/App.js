import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(
      books => {
        this.setState(() => ({
          books
        }))
      }
    )
  }

  handleShelfChanged = (updatedBook) => {
    let isNewBook = true;
    const books = this.state.books.slice();
    books
      .filter(book => book.id === updatedBook.id)
      .forEach(book => {
        book.shelf = updatedBook.shelf;
        isNewBook = false;
      });

    isNewBook && books.push(updatedBook);

    this.setState(() => ({
      books
    }))

    BooksAPI.update(updatedBook, updatedBook.shelf);
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            myBooks={this.state.books}
            onClose={() => history.push('/')}
            handleShelfChanged={this.handleShelfChanged} />
        )} />

        <Route exact path='/'>
          <BooksList
            books={this.state.books}
            handleShelfChanged={this.handleShelfChanged} />
        </Route>

      </div>
    )
  }
}

export default BooksApp
