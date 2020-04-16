import React from 'react';
import './about-style.scss';
import contentImage from './About-ManPetting.svg';

export default class About extends React.PureComponent
{
    render()
    {
        return (
            <div className='about-container'>
                <div className='column-left'>
                    <h1>Who are we?</h1>
                    <p>
                        We are a designer-developer duo from Toronto. Growing up as the kids of small business owners, we know how hard running a business is. Every customer, every sale and every dollar counts. Events like this make an already tough job almost impossible. As native Torontonians, we also know that local businesses are what make Toronto such an amazing place to live in. We knew that we had to do something to help.
                    </p>
                    <p>
                        Thus, Local Patron was born. Inspired by sites like Support Local, Help Main Street and Save our Faves, we decided to build a platform on which Canadians could support their local businesses by purchasing gift cards.
                    </p>
                </div>
                <div className='column-right'>
                    <img className='content-image' src={contentImage} alt='Man Petting Dog'/>
                </div>
            </div>
        );
    }
}