import {Component} from 'react';
import '../App.css';
class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    handleClick = () => {
        this.props.filter(this.state.userInput);
    }

    handleClear = () => {
        this.setState({userInput: ''});
        this.props.clear();
    }

    render(){
        return (
            <div className="search-bar">
                <div className="inputs">
                    <input value={this.state.userInput} onChange={(e) => this.handleChange(e)}/>
                    <button onClick={() => this.handleClick()}>Search</button>
                    <button className="clear-search" onClick={() => this.handleClear()}>Clear Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;