import React from 'react';
import './login-style.scss';
import contentImage from './login-Loving.svg';

export default class Login extends React.PureComponent
{
    render()
    {
        return (
            <div className='login-container'>
                <div className='column-left'>
                    <h1>We are here to help support your business.</h1>
                    <h2>If you already have an account, sign in here. If not, sign up
                        <a id='Here' href='mailto:contact@localpatron.org'>
                        </a>
                    </h2>
                    <div style={{flex: 0.2}}/>
                    <form className='login-form' /*action = {/API/contact}*/ method = 'post'>
                        <p>Email</p>
                        <input id='email' placeholder='Email' type='email' />
                        <p>Password</p>
                        <input id = 'password' placeholder = 'Password' type = 'text'/>
                        <input type="submit" value="Log In"></input>
                    </form>
                </div>
                <div className='column-right'>
                    <img className='content-image' src={contentImage} alt='Man with love' width = '0.2'/>
                </div>
            </div>
        );
    }
}