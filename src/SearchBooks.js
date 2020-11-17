import React from 'react'
import { Link } from 'react-router-dom'

const SearchBooks = () => (
    <Link
        to="/search"
        className="open-search">
        <button>
            Add a book
        </button>
    </Link>
)

export default SearchBooks;