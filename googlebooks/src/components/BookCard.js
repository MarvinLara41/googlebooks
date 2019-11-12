import React from 'react';

const BookCard = (props) => {

    return(
        <div className="list">
            <img src={props.image} alt=""/>
            <div>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p className="font">{props.publishedDate}</p>
            </div>
        </div>
    )
}

export default BookCard;