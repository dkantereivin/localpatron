import React from 'react';
import './type-selection-style.scss';
import {RouteComponentProps, Link} from 'react-router-dom';

type TypeSelProps = {
    placeID: string
} & RouteComponentProps;

export default class VendorTypeSelection extends React.PureComponent<TypeSelProps>
{
    componentDidMount(): void {
        if (this.props.placeID.length < 1)
            this.props.history.push('/add/search');
    }

    render()
    {
        return (
            <div className='type-selection-container'>
                <h1>Happy customer or business owner?</h1>
                <h2>Let us know so we can point you in the right direction.</h2>
                <Link className='vendor-type-button' to='/add/check-info/customer'>
                    I'm a customer of this business
                </Link>
                <Link className='vendor-type-button' to='/add/check-info/vendor'>
                    I own this business.
                </Link>
            </div>
        )
    }
}