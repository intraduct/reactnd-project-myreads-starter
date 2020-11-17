import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {

    state = {
        value: '',
        books: []
    }

    handleValueChanged = (event) => {
        const value = event.target.value
        this.setState({
            value
        });
        BooksAPI.search(value).then(books => {
            if (Array.isArray(books)) {
                this.setState({ books })
            } else {
                this.setState({books: []})
            }
        });
    }

    getFromMyBooks = (book) => {
        return this.props.myBooks.filter(b => b.id === book.id)[0] || book;
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.props.onClose}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.value}
                            onChange={this.handleValueChanged} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books
                        .map(book => this.getFromMyBooks(book))
                        .map(book => {
                            return (
                            <li key={book.id}>
                                <Book book={book} handleShelfChanged={this.props.handleShelfChanged} />
                            </li>
                        )})}
                    </ol>
                </div>
            </div>
        );
    }
}
export default SearchBooks;