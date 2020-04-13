import React from 'react';
import './contact-style.scss';
import contentImage from './Contact-Jumping.svg';

export default class Contact extends React.PureComponent
{
    render()
    {
        return (
            <div className='contact-container'>
                <div className='column-left'>
                    <h1>Say Hello!</h1>
                    <h2>You can contact us at:{'\n'}
                        <a id='contact' href='mailto:contact@localpatron.org'>
                        contact@localpatron.org
                        </a>
                    </h2>
                    <div style={{flex: 0.2}}/>
                    <p>Leave us a message below to let us know your questions, concerns, and anything else you'd like us to know.</p>
                    <form className='contact-form'>
                        <input id='name' placeholder='Your Name' type='text'/>
                        <input id='email' placeholder='Contact Email' type='email' />
                        <input id='msg' placeholder='Leave us a message.' type='text'/>
                    </form>
                </div>
                <div className='column-right'>
                    <img className='content-image' src={contentImage} alt='Man Petting Dog'/>
                </div>
            </div>
        );
    }
}