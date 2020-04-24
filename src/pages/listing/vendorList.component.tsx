import React from 'react';
import axios, {AxiosResponse} from 'axios';
import {
    Vendor, VendorListProps, VendorContainerState,
    GET_VENDORS_URL, VendorDetailsState, GET_VENDOR_URL, DEFAULT_VENDOR
} from './vendorList.types';
import GoogleMapReact from 'google-map-react';
import { Link, Route, Switch, RouteComponentProps, RouteChildrenProps, withRouter } from 'react-router-dom';
import './vendor-list-style.scss';
import {PLACES_API} from "../../Constants";
import Socials from '../../components/socials';


export class VendorListContainer extends React.PureComponent<{}, VendorContainerState> {
    state: VendorContainerState = {position: 0, vendors: []};
    async componentDidMount() {
        this.setState({
            // TODO: partial randomization of list order
            vendors: (await VendorListContainer.fetchVendors(100))
        });
    }

    render() {
        return (
            <div className='vendor-browser'>
                <Switch>
                    <Route exact path={['/', '/vendors']}>
                        <VendorList position={0} width={'30%'} height={'100%'} vendors={this.state.vendors}/>
                    </Route>
                    <Route path='/vendors/:uName' children={withRouter(VendorDetails)}/>
                </Switch>
                <Route path={['/', '/vendors']}>
                    <div className='map-container' style={{backgroundColor: 'lightblue'}}>
                        {/*<GoogleMapReact*/}
                        {/*    bootstrapURLKeys={{key: PLACES_API.KEY, language: 'en', region: 'ca'}}*/}
                        {/*    defaultCenter={{lat: 43.758695, lng: -79.361420}}*/}
                        {/*    defaultZoom={10}*/}
                        {/*    options={{*/}
                        {/*        minZoom: 6,*/}
                        {/*        styles: PLACES_API.MAP_STYLE*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </div>
                </Route>
            </div>)
    }

    private static async fetchVendors(limit: number = 20): Promise<Vendor[]> {
        const params = {limit};
        const res: AxiosResponse<Vendor[]> = await axios.get(GET_VENDORS_URL, {params});
        return res.data;
    }
}

export class VendorList extends React.PureComponent<VendorListProps> {
    render() {
        return (
            <div className='vendor-list-container' style={{width: this.props.width, height: this.props.height}}>
                {this.props.vendors.map(VendorList.vendorRow)}
            </div>
        )
    }

    private static vendorRow(data: Vendor): React.ReactNode {
        return (
            <div className='vendor-list-entry' key={data.vid}>
                <div className='vendor-details'>
                    <h4>{data.name}</h4>
                    <h5>{data.place.address.addr}</h5>
                    <h5>{formatPhoneNumber(data.phone.toString())}</h5>
                </div>
                <div className='vendor-actions'>
                    {data.externals ? <a className='nav-button' href={data.externals.web}>
                        Visit Website
                    </a> : null}
                    <Link className='nav-button' to={`/vendors/${data.uname}`}>
                        Details
                    </Link>
                </div>
            </div>
        )
    }
}

export class VendorDetails extends React.PureComponent<RouteComponentProps<{uName: string}>, VendorDetailsState> {
    state = {vendor: DEFAULT_VENDOR};

    async componentDidMount() {
        let vendor: Vendor = await VendorDetails.fetchVendor(this.props.match.params.uName);
        this.setState({vendor});
    }

    render() {
        const externals = this.state.vendor.externals || {};
        return (
            <div className='vendor-page-container'>
                <div className='details-col-one'>
                <div className='vendor-details'>
                    <h1>{this.state.vendor.name}</h1>
                    <h2>{this.state.vendor.place.address.addr}</h2>
                    <h2 style={{marginBottom: '3vh'}}>{formatPhoneNumber(this.state.vendor.phone.toString())}</h2>
                    <div className='externals-bar'>
                        {externals.ye ? <a href={externals.ye} className='yelp-button'>View on Yelp</a> : null}
                        {externals.web ? <Link to={externals.web} className='website-button'>Website</Link> : null}
                        <Socials fb={externals.fb} tt={externals.tt} ig={externals.ig}/>
                    </div>
                    {this.state.vendor.description ? <React.Fragment><h3><u>Description</u></h3>
                        <p>{this.state.vendor.description}</p></React.Fragment> : null}
                    <div className='externals-bar'>
                        {externals.ue ? <a href={externals.ue} className='delivery-button'>UberEats</a> : null}
                        {externals.dd ? <a href={externals.dd} className='delivery-button'>Doordash</a> : null}
                    </div>
                </div>
                <OrderBox vendor={this.state.vendor}/>
                </div>
            </div>
        )
    }

    private static async fetchVendor(uname: string): Promise<Vendor> {
        const url: string = GET_VENDOR_URL + uname;
        const {data}: AxiosResponse<Vendor> = await axios.get(url);
        console.log(data);
        return data;
    }
}

export function formatPhoneNumber(phoneNumber: string) {
    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match)
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    return null
}

function OrderBox(props: {vendor: Vendor}) {
    return (
        <div className='order-box'>
            {props.vendor.vtype === 'CM' ?
                <React.Fragment>
                    <h4>Buy a Gift Card!</h4>
                    <a className='buy-gc-button' href={props.vendor.externals.card}>Purchase</a>
                </React.Fragment> : null
            }
        </div>
    )
}