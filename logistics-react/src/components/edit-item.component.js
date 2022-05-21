import React, {Component} from "react";

export default class EditItem extends Component {

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