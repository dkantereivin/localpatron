import React from 'react';
//import contentImage_1 from './hero.png';
import './homepage-style.scss';

export default class Homepage extends React.PureComponent
{
    render()
    {
        return (
            /*<div className="hero-image">
                <div className="hero-text">
                    <h1>Save a local business. Buy a gift card. </h1>
                    <p>Help your local business by buying gift cards to provide critical cash support during the COVID-19 crisis.  Small businesses are the backbone of the world's economy. This site drives 100% of proceeds to small businesses, built by volunteers with love from Toronto.</p>
                    <input id='name' placeholder='Your Name' type='text'/>
                </div>
                <img src={contentImage} alt='Man Petting Dog'/>
            </div>*/
            <body>
                <section className="hero">
                    <div className="hero-inner">
                        <h3>Let's fight COVID-19 Together.</h3>
                        <h1>Help save a business. Buy a gift card.</h1>
                        <p>Help your local business by buying gift cards to provide critical cash support during the COVID-19 crisis.  Small businesses are the backbone of the world's economy. This site drives 100% of proceeds to small businesses, built by volunteers with love from Toronto.</p>
                        <input id='search' placeholder='Enter business here...' type='text' />
                    </div>
                </section>
                <main>
                    <section className = "content">
                        <h1>By purchasing a gift card you are ....</h1>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src= '' alt="Coffee"/>
                                    <div className="container">
                                        <h2>Keep the lights on.</h2>
                                        <p>Your contribution will help pay for rent, employee wages and other expenditures. With Canada facing record unemployment, you are helping people keep their jobs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src= '' alt="Coffee"/>
                                    <div className="container">
                                        <h2>Help someone in need.</h2>
                                        <p>Aside from helping business owners, cards can also be donated to healthcare workers through this website.This way, you can show your support to frontline workers and your community.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src= '' alt="Coffee"/>
                                    <div className="container">
                                        <h2>Savour later.</h2>
                                        <p>We'll all have something to celebrate when this is over. Be it a fresh coffee or a much needed haircut, we can all savour the things we've missed most. Cheers!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className = "faq">
                        <h1>Frequently Asked Questions</h1>
                        <button className="accordion">Section 1</button>
                        <div className="panel">
                            <p>Lorem ipsum...</p>
                        </div>

                        <button className="accordion">Section 2</button>
                        <div className="panel">
                            <p>Lorem ipsum...</p>
                        </div>

                        <button className="accordion">Section 3</button>
                            <div className="panel">
                        <p>Lorem ipsum...</p>
                        </div>
                    </section>                   
                </main>
            </body>
        )
    }
}