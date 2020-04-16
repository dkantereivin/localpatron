import React from 'react';
import './add-thankyou-style.scss';
import contentImage from './Checkout-sitting.svg';

export default class About extends React.PureComponent
{
    render()
    {
        return (
            <div className='about-container'>
                <div className='column-left'>
                    <h1>Thank you for your purchase!</h1>
                    <p>
                        Thanks for helping your local business through this tough time. You'll receive your gift card in your inbox shortly. If you run into any issues. please contact us.                    </p>
                    <p>
                        Here is how your gift card works:
                    </p>
                    <ul>
                        <li>The next time you visit a business, show them your promo code.</li>
                        <li>If you would like to gift the card to someone else, simply forward the email to them.</li>
                        <li>Stay safe and enjoy!</li>
                    </ul>
                    <input type="submit" value="Return to Home Page" />
                </div>
                <div className='column-right'>
                    <img className='content-image' src={contentImage} alt='Woman Running'/>
                </div>
            </div>
        );
    }
}