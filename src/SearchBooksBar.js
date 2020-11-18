import React from 'react'

const SearchBooksBar = (props) => (
    <div className="search-books-bar">
        <button className="close-search" onClick={props.onClose}>Close</button>
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