import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResult from './SearchBooksResult'

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
                books = books.map(book => mergeMyBooks(book));
                this.setState({ books })
            } else {
                this.setState({ books: [] })
            }
        });
    }

    mergeMyBooks = (book) => {
        return this.props.myBooks.filter(b => b.id === book.id)[0] || book;
    }

    render() {
        return (
            <div className="search-books">
                <SearchBooksBar
                    onClose={this.props.onClose}
                    value={this.state.value}
                    handleValueChanged={this.handleValueChanged} />
                <SearchBooksResult
                    books={this.state.books}
                    handleShelfChanged={this.props.handleShelfChanged} />
            </div>
        );
    }
}
export default SearchBooks;