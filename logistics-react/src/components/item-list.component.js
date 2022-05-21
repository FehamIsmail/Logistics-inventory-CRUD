import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Item = props => (
//     <tr>
//         <td>{props.item.name}</td>
//         <td>{props.item.description}</td>
//         <td>{props.item.quantity}</td>
//         <td>{props.item.date.substring(0,10)}</td>
//         <td>
//             <Link to={"/edit/"+props.item._id}>edit</Link> | <a href="#" onClick={() => { props.item(props.item._id) }}>delete</a>
//         </td>
//     </tr>
// )

export default class ItemsList extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.deleteItem = this.deleteItem.bind(this)
    //     // this.state = {items: []};
    // }

    // componentDidMount() {
    //     axios.get('http://localhost:3000/items/')
    //         .then(response => {
    //             this.setState({ items: response.data })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }
    //
    // deleteItem(id) {
    //     axios.delete('http://localhost:3000/items/'+id)
    //         .then(response => { console.log(response.data)});
    //
    //     this.setState({
    //         exercises: this.state.items.filter(el => el._id !== id)
    //     })
    // }
    //
    // itemList() {
    //     return this.state.items.map(currentItem => {
    //         return <Item exercise={currentItem} deleteExercise={this.deleteItem} key={currentItem._id}/>;
    //     })
    // }

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
                    {/*{ this.itemList() }*/}
                    </tbody>
                </table>
            </div>
        )
    }
}