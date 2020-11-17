import React from 'react'
import BookShelf from './BookShelf'

const BooksListContent = (props) => (
    <div className="list-books-content">
        <div>
            <BookShelf
                title="Currently Reading"
                books={props.books.filter(book => book.shelf === 'currentlyReading')} />
            <BookShelf
                title="Want to Read"
                books={props.books.filter(book => book.shelf === 'wantToRead')} />
            <BookShelf
                title="Read"
                books={props.books.filter(book => book.shelf === 'read')} />
        </div>
    </div>
)

export default BooksListContent;