
import React, {Component} from 'react'
import '../App.css';
class SearchBar extends Component {
    constructor(props){
        super()
        this.state = {
            userInput: '',
            arrayList: [props]
        }
    }
    handleChange(e){
        this.setState ({userInput: e.target.value});
      }
    handleSubmit(userInput){
        
        }
    

    render(){

    return (
        <div className="search-bar">            
            <section className="search-area">
                <input className="filter-button" onChange={ () => this.handleChange}></input>
                <button className="search-button" Onclick={() => this.handleSubmit()}>Search</button>
                <button className="clear-button">Clear Search</button>
            </section>
        </div>        
    )
    }
}

export default SearchBar