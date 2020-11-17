import React from 'react'
import BookShelf from './BookShelf'

const BooksListContent = (props) => {
    const shelfs = [
        { title: 'Currently Reading', name: 'currentlyReading' },
        { title: 'Want to Read', name: 'wantToRead' },
        { title: 'Read', name: 'read' }
    ];
    return (
        <div className="list-books-content">
            <div>
                {shelfs.map(shelf => (
                    <BookShelf 
                        key={shelf.name}
                        title={shelf.title}
                        books={props.books.filter(book => book.shelf === shelf.name)}
                        handleShelfChanged={props.handleShelfChanged} />
                ))}
            </div>
        </div>
    )
}

export default BooksListContent;