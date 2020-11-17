import React from 'react'
import Book from './Book';

const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map(book => (
                    <li key={book.id}>
                        <Book
                            coverUrl={book.imageLinks.thumbnail}
                            title={book.title}
                            // TODO multiple authors
                            author={book.authors[0]}
                        />
                    </li>
                ))}
            </ol>
        </div>
    </div>
)

export default BookShelf;