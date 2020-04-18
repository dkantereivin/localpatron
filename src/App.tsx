import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/about/about.page';
import Login from './pages/login/login.page';
import Contact from './pages/contact/contact.page';
import Home from './pages/homepage/home.page';
import './App.scss';
import Onboarding from './pages/Onboarding.flow';

type GlobalState = {}

class App extends React.PureComponent<any, GlobalState>
{
    private browserLocation: Position | null = null;

    protected promptLocation() {
        let geolocOpts: PositionOptions = {
            enableHighAccuracy: true,
            timeout: Infinity
        };
        navigator.geolocation.getCurrentPosition(
            (pos: Position) => this.browserLocation = pos,
            () => {
                alert(`At this early stage in development, we need your location to properly personalize the experience.
                We understand potential privacy concerns, so we're working to support users without location enabled.`);
                window.location.reload();
            },
            geolocOpts
        );
    }

    protected modifyState(obj: Partial<GlobalState>) {
        this.setState(obj);
    }

    componentDidMount(): void {

    }

    render()
    {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar loggedIn={false}/>
                    <div style={{height: '9vh'}}/>
                        <Switch>
                            <Route exact path={['/', '/home']} >
                                <Home />
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>
                            <Route path='/contact'>
                                <Contact />
                            </Route>
                            <Route path='/login'>
                                <Login />
                            </Route>
                            <Route path='/add'
                                   render={(props) => <Onboarding {...props} setBrowserLocation={() => this.promptLocation}
                                                                             browserLocation={this.browserLocation as Position} />}
                            />
                        </Switch>
                    {/*</div>*/}
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
