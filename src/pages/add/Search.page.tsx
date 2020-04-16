import './search-style.scss';
import React from 'react';
import googleLogo from './Google-Places-Logo.png';
import axios, {AxiosResponse} from 'axios';
import {PLACES_API, PROXY} from "../../Constants";
import { RouteComponentProps } from 'react-router-dom';

type SearchProps = {
    browserLocation: Position,
    sessionToken: string,
    setPlaceSelection: (id: string) => void
} & RouteComponentProps;

type OnboardSearchState = {
    queryText: string;
    response: any;
    selection: any;
}
type Result = {
    description: string,
    place_id: string
} & any;

export default class SearchPage extends React.PureComponent<SearchProps, OnboardSearchState>
{
    state = {
        queryText: '',
        response: [],
        selection: null
    };

    constructor(props: SearchProps) {
        super(props);
        this.handleAddressChange = this.handleAddressChange.bind(this);
    }

    render()
    {
        return (
            <div className='search-page-container'>
                <h1>Your favorite business not on our site? Add it here.</h1>
                <h2>Together, we'll look it up and add it to our directory.</h2>
                <form>
                    <input id='address-searchbar'
                           type='text'
                           className='address-search'
                           value={this.state.queryText}
                           placeholder='Start a name/address.'
                           onChange={this.handleAddressChange}
                    />
                    <SearchResults selectPlace={(id: string, description: string) => this.onPlaceSelect(id, description)}
                                   results={this.state.response}
                    />
                </form>
            </div>
        )
    }

    onPlaceSelect(id: string, description: string) {
        this.setState({queryText: description, selection: id});
        this.props.setPlaceSelection(id);
        this.props.history.push('/add/type')
    }

    private async handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            queryText: event.target.value
        });
        /*this.setState({
            response: await this.getAutocompleteResults(event.target.value)
        });*/
    }

    private async getAutocompleteResults(queryText: string): Promise<Result[]> {
        if (queryText.length < 3 || this.state.selection)
            return [];

        const params = {
            input: queryText,
            key: PLACES_API.KEY,
            sessiontoken: this.props.sessionToken,
            language: 'en',
            origin: this.coordsAsStr(),
            location: this.coordsAsStr(),
            types: 'establishment',
            components: 'country:ca'
        };

        const res: AxiosResponse = await axios.get(PROXY.url + PLACES_API.AUTOCOMPLETE, {
            params,
            headers: {'X-Requested-With': 'LocalPatron-Axios'},
        });
        return res.data.predictions;
    }

    private coordsAsStr(): string
    {
        if (!this.props.browserLocation)
            return '-79.4,43.7';
        return `${this.props.browserLocation.coords.latitude},${this.props.browserLocation.coords.longitude}`;
    }
}


type SearchResultsProps = {
    selectPlace: (id: string, description: string) => void,
    results: Result[]
}
export class SearchResults extends React.PureComponent<SearchResultsProps> {
    render() {
        return (
            <div className='results-div'>
                {this.props.results.map((result: Result) => {
                    return (
                        <input className='result'
                               type='button'
                               key={result.description}
                               value={result.description}
                               onClick={() => this.props.selectPlace(result.place_id, result.description)}
                        />
                    );
                })}
                <img className='google-logo' src={googleLogo} alt='Powered by Google'/>
            </div>
        )
    }
}