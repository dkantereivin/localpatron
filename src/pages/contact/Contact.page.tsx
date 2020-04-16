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
                    <h2>You can contact us directly at:{'\n'}
                        <a id='contact' href='mailto:contact@localpatron.org'>
                        contact@localpatron.org
                        </a>
                    </h2>
                    <div style={{flex: 0.2}}/>
                    <p>Or, you can leave us a message below. Let us know of any question and/or concerns you have.</p>
                    <form className='contact-form' /*action = {/API/contact}*/ method = 'post'>
                        <input id='name' placeholder='Your Name' type='text'/>
                        <input id='email' placeholder='Contact Email' type='email' />
                        <textarea name = "message" placeholder = "Your message" />
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
                <div className='column-right'>
                    <img className='content-image' src={contentImage} alt='Man Petting Dog'/>
                </div>
            </div>
        );
    }
}