import React from 'react';
import './add-thankyou-style.scss';
import contentImage from './Add-running.svg';

export default class About extends React.PureComponent
{
    render()
    {
        return (
            <div className='about-container'>
                <div className='column-left'>
                    <h1>Thanks for submitting!</h1>
                    <p>
                        Thanks for helping your local business through this tough time. Your helping increase their visibility and giving them a fighting chance.
                    </p>
                    <p>
                        Once we have a chance to manually review this business for legitimacy, you'll be able to find it in our listing. This usually takes from 2-3 days.
                    </p>
                    <input type="submit" value="Return to Home Page" />
                </div>
                <div className='column-right'>
                    <img className='content-image' src={contentImage} alt='Woman Running'/>
                </div>
            </div>
        );
    }
}