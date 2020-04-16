import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import './vendor-details-style.scss';
import axios, { AxiosResponse } from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import {PLACES_API, PROXY} from "../../Constants";

type VendorDetailsProps = {
    placeID: string,
    sessionToken: string,
    saveState: (state: VendorDetailsState) => void
} & RouteComponentProps;

export type VendorDetailsState = {
    businessName: string;
    phoneNumber: string;
    siteAddress: string;
    cardLink: string;
    doordashLink: string;
    ubereatsLink: string;
    address: string;
    coords: {lat: string, lng: string};
    foodType: string;
    vendor?: {
        firstName: string;
        lastName: string;
        email: string
    };
    captchaKey?: string | null;
}

export default class VendorDetails extends React.PureComponent<VendorDetailsProps, VendorDetailsState>
{
    state = {
        businessName: '', phoneNumber: '', siteAddress: '', address: '', coords: {lat: '', lng: ''},
        cardLink: '', doordashLink: '', ubereatsLink: '', foodType: ''
    };

    constructor(props: VendorDetailsProps) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(): void {
        if (!this.props.placeID ||this.props.placeID.length < 3)
            return void this.props.history.push('/add/search');
        this.setPlaceDetails(this.props.placeID);
    }

    render() {
        return (
            <div className='vendor-details-container'>
                <h1>Please verify our info</h1>
                <form className='form-generic'>
                    <div className='col-left'>
                        <label>Business Name</label>
                        <input value={this.state.businessName} type='text' placeholder='Business Name'
                               onChange={this.handleInputChange} id='businessName'/>
                        <label>Phone Number</label>
                        <input value={this.state.phoneNumber} type='tel' placeholder='(XXX) XXX-XXXX'
                               onChange={this.handleInputChange} id='phoneNumber'/>
                        <label>Website Address</label>
                        <input value={this.state.siteAddress} type='url' placeholder='https://www.localpatron.org'
                               onChange={this.handleInputChange} id='siteAddress'/>
                        <label>External Gift Card Link</label>
                        <input onChange={this.handleInputChange} type='url' placeholder='Link' id='cardLink'/>/>
                    </div>
                    <div className='col-right'>
                        <label>Doordash Link</label>
                        <input onChange={this.handleInputChange} type='url' placeholder='Link' id='doordashLink'/>
                        <label>UberEats Link</label>
                        <input onChange={this.handleInputChange} type='url' placeholder='Link' id='ubereatsLink'/>
                        <label>Food Type</label>
                        <input onChange={this.handleInputChange} type='text' placeholder='Japanese, Indian, Seafood, ...' id='foodType'/>/>
                    </div>
                </form>
                <Switch>
                    <Route path={this.props.match.url + '/vendor'}>
                        <div className='personal-info-box'>
                            <label>First Name</label>
                            <input onChange={(e) => this.handleInputChange(e, 'vendor')}
                                   type='text' placeholder='First name' id='firstName'/>
                            <label>Last Name</label>
                            <input onChange={(e) => this.handleInputChange(e, 'vendor')}
                                   type='text' placeholder='Last name' id='lastName'/>
                            <label>Contact Email</label>
                            <input onChange={(e) => this.handleInputChange(e, 'vendor')}
                                   type='email' placeholder='Email Address' id='email'/>
                            <input type='button' value='Sign Up' onClick={() => this.handleSubmit('vendor')}/>
                        </div>
                    </Route>
                    <Route path={this.props.match.url + '/customer'}>
                        <ReCAPTCHA
                            sitekey='6LfsQOkUAAAAAFwpp5qpOXEgQEjmJMLlrCn3Lt-j'
                            onChange={(token: string | null) => this.setState({captchaKey: token})}
                        />
                        <input type='button' value='Submit' onClick={() => this.handleSubmit('customer')}/>
                    </Route>
                </Switch>
            </div>
        );
    }

    handleSubmit(type: 'customer' | 'vendor') {
        if (type === 'customer') {
            axios.put('https://api.localpatron.org/vendor/community-business', this.state)
                .then(() => this.props.history.push('/add/complete'));
        } else {
            this.props.saveState(this.state);
            this.props.history.push('/add/plan')
        }
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>, parent?: keyof VendorDetailsState): void {
        let obj: any = {};
        let key = event.target.id as (keyof VendorDetailsState | keyof VendorDetailsState['vendor']);
        if (parent)
            obj[parent] = {[key]: event.target.value};
        else
            obj[key] = event.target.value;
        this.setState(obj);
    }

    protected async setPlaceDetails(id: string): Promise<void> {
        const params = {
            key: PLACES_API.KEY,
            place_id: id,
            language: 'en',
            region: 'ca',
            sessiontoken: this.props.sessionToken,
            fields: ['name', 'formatted_phone_number', 'geometry', 'photo', 'adr_address', 'website'].join(',') // $0.0234/req or less
        };
        const {data}: AxiosResponse = await axios.get(PROXY.url + PLACES_API.DETAILS, {
            params,
            headers: {'X-Requested-With': 'LocalPatron-Axios'},
        });

        this.setState({
            businessName: data.result.name,
            siteAddress: data.result.website,
            phoneNumber: data.result.formatted_phone_number,
            coords: {
                lat: data.result.geometry.location.lat,
                lng: data.result.geometry.location.lng
            },
            address: data.result.formatted_address
        });
    }
}