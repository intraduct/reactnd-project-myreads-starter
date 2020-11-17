import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'

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

  handleShelfChanged = (e) => {
    const id = e.target.name;
    const newShelf = e.target.value;
    const books = this.state.books.slice();
    books
      .filter(book => book.id === id)
      .forEach(book => {
        book.shelf = newShelf;
        BooksAPI.update(book, newShelf);
      });
    this.setState(() => ({
      books
    }))
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => history.push('/')}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
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
