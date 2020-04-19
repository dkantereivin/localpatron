import React from 'react';
import contentImage_1 from './MessyDoodle.svg';
import contentImage_2 from './UnboxingDoodle.svg';
import contentImage_3 from './CoffeeDoodle.svg'
import contentImage_4 from './Thankyou.svg';
import './homepage-style.scss';

export default class Homepage extends React.PureComponent
{

    render()
    {  
        return (
            <body>
                <section className="hero">
                    <div className="hero-inner">
                        <h3>Let's fight COVID-19 Together.</h3>
                        <h1>Help save a business. Buy a gift card.</h1>
                        <p>Help your local business by buying gift cards to provide critical cash support during the COVID-19 crisis.  Small businesses are the backbone of the world's economy. <b>This site drives 100% of proceeds to small businesses</b>, built by volunteers with love from Toronto.</p>
                        <input type="submit" value="Buy a Gift Card" />
                    </div>
                </section>
                <main>
                    <section className = "content">
                        <h1>By purchasing a gift card you...</h1>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src= {contentImage_1} alt="Messy Man"/>
                                    <div className="container">
                                        <h2>Keep the lights on.</h2>
                                        <p>Your contribution will help pay for rent, employee wages and other expenditures. With Canada facing record unemployment numer, you are helping people keep their jobs and livelihoods. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <img src= {contentImage_2} alt="Unboxing Present"/>
                                    <div className="container">
                                        <h2>Help someone in need.</h2>
                                        <p>Aside from helping business owners, cards can also be donated to healthcare workers through this website to show your support. Also consider donating directly to hospitals and charities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <img src= {contentImage_3} alt="Coffee"/>
                                    <div className="container">
                                        <h2>Savour later.</h2>
                                        <p>We'll all have something to celebrate when this is over. Be it a fresh coffee or a much needed haircut, we can all savour the things we've missed most. We are all in this together!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className = "faq">
                        <h1>Frequently Asked Questions</h1>
                        <button className="accordion"><b>Do you make money from this?</b>
                        </button>
                        <div className="panel">
                            <p>Lorem ipsum...</p>
                        </div>
                        <button className="accordion"><b>Do you make money from this?</b>
                        </button>
                        <div className="panel">
                            <p>Lorem ipsum...</p>
                        </div>
                        <button className="accordion"><b>Do you make money from this?</b>
                        </button>
                        <div className="panel">
                            <p>Lorem ipsum...</p>
                        </div>
                    </div>
                    <div className = "thank-you">
                        <div className = "thankyou-text">
                            <h1>Your support means the world.</h1>
                            <hr></hr>
                            <p>These are uncertain times. For many, including service industry staff and healthcare workers, the measures put in place are devestating. Any contribution you make, no matter how small are giving them a fighting chance. We want to help and do our part as well.</p>
                            <p>Even if you can't buy a card, sharing this website with friends and family can help spread the word. Or, you support us by buying us a coffee, so we can keep this site up and running.</p>
                            <input type = "Submit" value = "Buy Us a Coffee"></input>
                        </div>
                        <div className = "thankyou-cover">
                            <img src = {contentImage_4} alt = "Man celebrating"></img>
                        </div>
                        
                    </div>               
                </main>
            </body>
        )
    }

}