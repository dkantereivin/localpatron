import React from 'react';
import contentImage from './hero.png';
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
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src="/w3images/team1.jpg" alt="Jane"/>
                                    <div className="container">
                                        <h2>Jane Doe</h2>
                                        <p className="title">CEO & Founder</p>
                                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                        <p>example@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src="/w3images/team1.jpg" alt="Jane"/>
                                    <div className="container">
                                        <h2>Jane Doe</h2>
                                        <p className="title">CEO & Founder</p>
                                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                        <p>example@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src="/w3images/team1.jpg" alt="Jane"/>
                                    <div className="container">
                                        <h2>Jane Doe</h2>
                                        <p className="title">CEO & Founder</p>
                                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                        <p>example@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className = "faq">
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