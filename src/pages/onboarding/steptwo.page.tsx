import React from 'react';
import './steptwo-style.scss';
import contentImage from './blast-off.svg';

export default class stepTwo extends React.PureComponent
{
    render()
    {
        return (
            <div className='login-container'>
                <div className='column-left'>
                    <h1>We are here to help support your business.</h1>
                    <h2>If you already have an account, sign in here. If not, sign up  
                        <a id='register' href='linkto:'>
                            <b> Here.</b>
                        </a>
                    </h2>
                    <div style={{flex: 0.2}}/>
                    <form className='login-form' /*action = {/API/contact}*/ method = 'post'>
                        <p>Create A Password</p>
                        <input id='password' placeholder='Email' type='text' />
                        <p>Confirm Password</p>
                        <input id = 'confirm-password' placeholder = 'Password' type = 'text'/>
                        <p>Already have an account? <u>Sign In.</u></p>
                        <input type="submit" value="Create Account" />
                    </form>
                </div>
                <div className='column-right'>
                    <img className='content-image' src={contentImage} alt='Man with love' width = '0.2'/>
                </div>
            </div>
        );
    }
}