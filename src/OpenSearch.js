import React from 'react'
import { Link } from 'react-router-dom'

const OpenSearch = () => (
    <Link
        to="/search"
        className="open-search">
        <button>
            Add a book
        </button>
    </Link>
)

export default OpenSearch;