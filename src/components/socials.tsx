import React from 'react';
import FacebookIcon from './socials_assets/facebook.svg';
import InstagramIcon from './socials_assets/insta.svg';
import TwitterIcon from './socials_assets/twitter.svg';


type SocialProps = Partial<{
        fb: string;
        ig: string;
        tt: string;
}>;

export default class Socials extends React.PureComponent<SocialProps> {
    render() {
        return (
            <div className='socials-bar'>
                {this.props.fb ? <a href={this.props.fb}><img src={FacebookIcon}/></a> : null}
                {this.props.ig ? <a href={this.props.ig}><img src={FacebookIcon}/></a> : null}
                {this.props.tt ? <a href={this.props.tt}><img src={TwitterIcon}/></a> : null}
            </div>
        )
    }
}
