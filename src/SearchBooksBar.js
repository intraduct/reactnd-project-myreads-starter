import React from 'react'
import { Link } from 'react-router-dom'

const SearchBooksBar = (props) => (
    <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title or author"
                value={props.value}
                onChange={props.handleValueChanged} />
        </div>
    </div>
)

export default SearchBooksBar;