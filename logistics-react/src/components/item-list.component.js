import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
    <tr>
        <td>{props.item.name}</td>
        <td>{props.item.description}</td>
        <td>{props.item.quantity}</td>
        <td>{props.item.weight}</td>
        <td>{props.item.size}</td>
        <td>{props.item.status}</td>
        <td>
            <Link to={"/edit/"+props.item._id}>edit</Link> | <button onClick={() => { props.deleteItem(props.item._id) }}>delete</button>
        </td>
    </tr>
)

export default class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this)

        //Initializing state of items with empty array
        this.state = {items: []};
    }

    componentDidMount() {
        //Filling empty array with a list of items from the database
        axios.get('http://localhost:5000/items/')
            .then(res => {
                console.log(res)
                this.setState({ items: res.data })
            })
            .catch(err => {
                console.log(err);
            })
    }

    deleteItem(id) {
        axios.delete('http://localhost:5000/items/'+id)
            .then(res => { console.log(res.data)});

        window.location = '/'
    }

    itemList() {
        return this.state.items.map(item => {
            return <Item item={item} deleteItem={this.deleteItem} key={item._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Inventory</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.itemList() }
                    </tbody>
                </table>
            </div>
        )
    }
}