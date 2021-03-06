import {Component} from 'react';
import '../App.css';
class Shelf extends Component {
    render(){
        let mappedTitles = this.props.shelf.map((title, key) => (
            <p key={key}>{title}</p>
        ))

        return (
            <div className="shelf">
                <h3>Your Shelf</h3>
                <button className="shelf-button" onClick={() => this.props.handleClear()}>Clear Shelf</button>
                {mappedTitles}
            </div>
        )
    }
}

export default Shelf;