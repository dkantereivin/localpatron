import SearchPage from "./add/Search.page";
import VendorTypeSelection from "./add/TypeSelection.page";
import VendorDetails, {VendorDetailsState} from "./add/VendorDetails.page";
import React from "react";
import {Route, Switch, RouteComponentProps} from 'react-router-dom';

type OnboardingProps = {
    browserLocation: Position,
    setBrowserLocation: () => void
} & RouteComponentProps;

export default class Onboarding extends React.PureComponent<OnboardingProps, any>
{
    private selectedPlaceID: string = '';
    private sessionToken: string = Onboarding.generateSessionToken();
    private vendorDetails: VendorDetailsState | undefined;

    constructor(props: OnboardingProps) {
        super(props);
        this.setPlaceSelection = this.setPlaceSelection.bind(this);
    }

    setPlaceSelection(id: string): void {
        this.selectedPlaceID = id;
    }

    render() {
        return (
            <Switch>
                <Route path='/add/search'
                       render={props => <SearchPage {...props}
                       sessionToken={this.sessionToken}
                       setPlaceSelection={this.setPlaceSelection}
                       browserLocation={this.props.browserLocation}/>}
                />
                <Route path='/add/type' render={props => <VendorTypeSelection {...props} placeID={this.selectedPlaceID}/>}/>
                <Route path='/add/check-info' render={props => <VendorDetails {...props}
                       placeID={this.selectedPlaceID}
                       sessionToken={this.sessionToken}
                       saveState={(state: VendorDetailsState) => this.vendorDetails = state}
                />} />
            </Switch>
        )
    }

    private static generateSessionToken() {
        let vals: Uint32Array = crypto.getRandomValues(new Uint32Array(2));
        return vals.join('');
    }

}