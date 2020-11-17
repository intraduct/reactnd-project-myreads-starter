import React from 'react'
import TitleBar from './TitleBar'
import BooksListContent from './BooksListContent'
import SearchBooks from './SearchBooks'

const BooksList = (props) => (
    <div className="list-books">
        <TitleBar />
        <BooksListContent 
        books={props.books}
        handleShelfChanged={props.handleShelfChanged} />
        <SearchBooks />
    </div>
)

export default BooksList;