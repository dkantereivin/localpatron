import React from 'react';

import './navbar.scss';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

type NavProps = {
    loggedIn: boolean
}

export default class Navbar extends React.PureComponent<NavProps>
{
    render(){
        return (
            <header>
                <Link to='/'>
                    <img className='logo' src={logo}  alt={'LocalPatron.'} />
                </Link>
                <nav className='tabs'>
                    <Link className='tab-link' to='/vendors'>Businesses</Link>
                    <Link className='tab-link' to='/about'>About Us</Link>
                    <Link className='tab-link' to='/contact'>Contact</Link>
                </nav>
                <nav className='special-buttons'>
                    <Link className='donate' to='/donate'>Donate</Link>
                    <Link className='business-dashboard' to={this.props.loggedIn ? '/vendor/dashboard' : '/add/search'}>
                        {this.props.loggedIn ? 'Dashboard' : 'Add a Business'}
                    </Link>
                    <Link className='login-logout' to={this.props.loggedIn ? 'logout' : 'login'}>
                        {this.props.loggedIn ? 'Logout' : 'Vendor Login'}
                    </Link>
                </nav>
            </header>
        )
    }
}