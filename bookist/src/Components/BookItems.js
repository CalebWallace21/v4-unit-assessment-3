import '../App.css';
import React, { Component } from 'react';

export default function BookItems (props){

    return <div className='Book-Item'>
        <img className='book-picture' src={props.book.img} onClick={() => props.title}/>
        {console.log('props', props)}
        <div className='book-text'>
        <p>{props.book.title} by {props.book.author}</p>
        
        </div>
    </div>
}