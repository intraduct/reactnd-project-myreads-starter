import React from 'react'

const Book = (props) => {

    const handleShelfChanged = (e) => {
        props.book.shelf = e.target.value;
        props.handleShelfChanged(props.book);
    }

    const { id, title, authors, shelf } = props.book;
    const coverUrl = props.book.imageLinks && props.book.imageLinks.thumbnail;

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{ width: 128, height: 193, backgroundImage: `url(${coverUrl})` }}>
                </div>
                <div className="book-shelf-changer">
                    <select onChange={handleShelfChanged} value={shelf || "move"} name={id}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors && authors.map(author => <p key={author}>{author}</p>)}</div>
        </div>
    )
}

export default Book;