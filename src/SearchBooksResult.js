import React from 'react'
import Book from './Book'

const SearchBooksResult = (props) => (
    <div className="search-books-results">
        <ol className="books-grid">
            {props.books.map(book => (
                <li key={book.id}>
                    <Book book={book} handleShelfChanged={props.handleShelfChanged} />
                </li>
            ))}
        </ol>
    </div>
)

export default SearchBooksResult;