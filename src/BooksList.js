import React from 'react'
import TitleBar from './TitleBar'
import BooksListContent from './BooksListContent'
import OpenSearch from './OpenSearch'

const BooksList = (props) => (
    <div className="list-books">
        <TitleBar />
        <BooksListContent
            books={props.books}
            handleShelfChanged={props.handleShelfChanged} />
        <OpenSearch />
    </div>
)

export default BooksList;