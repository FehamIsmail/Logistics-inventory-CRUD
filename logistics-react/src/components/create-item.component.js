import React, {Component, createRef} from "react";
import axios from "axios";


export default class CreateItem extends Component {

    constructor(props){
        super(props)

        this.bindOnChangeValues()
        this.sizeRef = createRef()
        this.statusRef = createRef()

        this.state = {
            name: '',
            description: '',
            quantity: 0,
            weight: 0,
            size: 'Medium',
            status: 'Order Filed',
        }
    }

    bindOnChangeValues(){
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeQuantity(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeWeight(e){
        this.setState({
            weight: e.target.value
        })
    }

    onChangeSize(e){
        this.setState({
            size: e.target.value
        })
    }

    onChangeStatus(e){
        this.setState({
            status: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const item = {
            item: this.state.name,
            description: this.state.description,
            quantity: this.state.quantity,
            weight: this.state.weight,
            size: this.state.size,
            status: this.state.status,
        }

        console.log(item)

        axios.post('/items/add', item)
            .then(res => console.log(res.data))

        window.location = '/'
    }

    render() {
        return (
            <div>
                <h3>Create New Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mb-3">
                        <label>Name: </label>
                        <input  type="text" className="form-control" minLength="3"
                                value={this.state.username}
                                onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Description: </label>
                        <input  type="text" className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Quantity: </label>
                        <input  type="number" className="form-control" min="1"
                                value={this.state.duration}
                                onChange={this.onChangeQuantity}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Weight (in kg): </label>
                        <input  type="number" className="form-control" min="0.01" step="0.01"
                                value={this.state.duration}
                                onChange={this.onChangeWeight}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Size: </label>
                        <select ref={this.sizeRef} className="form-control" id="size-box"
                                value={this.state.duration}
                                onChange={this.onChangeWeight}>
                                <option value="Extra Small">Extra Small</option>
                                <option value="Small">Small</option>
                                <option defaultValue value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="Extra Large">Extra Large</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label>Weight (in kg): </label>
                        <select ref={this.statusRef} className="form-control" id="size-box"
                                value={this.state.duration}
                                onChange={this.onChangeWeight}>
                            <option defaultValue value="Order Filed">Order Filed</option>
                            <option value="In Transit">In Transit</option>
                            <option value="Item Delivered">Item Delivered</option>
                            <option value="Shipment Delayed">Shipment Delayed</option>
                            <option value="Undeliverable. Item Lost">Undeliverable. Item Lost</option>
                            <option value="Undeliverable. Item Damaged">Undeliverable. Item Damaged</option>
                            <option value="Undeliverable. Item Seized">Undeliverable. Item Seized</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}