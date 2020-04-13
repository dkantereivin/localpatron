import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/about/about.page';
import Contact from './pages/contact/contact.page';
import './App.scss';


class App extends React.PureComponent
{
    render()
    {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar loggedIn/>
                    <div style={{height: '9vh'}}/>
                        <Switch>
                            <Route exact path={['/', '/home']}>
                                Whoa!
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>
                            <Route path='/contact'>
                                <Contact />
                            </Route>
                        </Switch>
                    {/*</div>*/}
                </BrowserRouter>
            </div>
        )
    }

}

export default App;
