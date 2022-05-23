import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {useForm} from "react-hook-form";

export default function EditItem(){
    const { id } = useParams();
    const [item, setItem] = useState({});
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        for (let variable in data) {
            if (data[variable] === '') {
                delete data[variable];
            }
        }
        console.log(data)
        axios.put('http://localhost:5000/items/'+ id, data)
            .then(res => {
                console.log(res.data)
                window.location = '/'
            })
            .catch(err => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        axios.get('http://localhost:5000/items/' + id)
            .then(res => {
                setItem(res.data)
                const sizeSelectBox = document.getElementsByTagName('select')[0]
                const statusSelectBox = document.getElementsByTagName('select')[1]
                for (let i = 0; i < sizeSelectBox.options.length; i++) {
                    if (sizeSelectBox.options[i].value === item.size) sizeSelectBox.options[i].selected = true
                }
                for (let i = 0; i < statusSelectBox.options.length; i++) {
                    if (statusSelectBox.options[i].value === item.status) statusSelectBox.options[i].selected = true
                }
            }).catch(err => {
                console.log(err)
            })

    }, [id, item.size, item.status])

    return (
        <div>
            <h3>Edit Item {'[' + id + ']'}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                    <label>Name: </label>
                    <input  type="text" className="form-control" minLength="3"
                            placeholder={item.name} name="name" {...register('name')}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Description: </label>
                    <input  type="text" className="form-control"
                            placeholder={item.description} name="description" {...register('description')}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Quantity: </label>
                    <input  type="number" className="form-control" min="1"
                            placeholder={item.quantity} {...register('quantity')}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Weight (in kg): </label>
                    <input  type="number" className="form-control" min="0.01" step="0.01"
                            placeholder={item.weight} {...register('weight')}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Size: </label>
                    <select className="form-control" id="size-box"
                             {...register('size')}
                        >
                        <option value="Extra Small">Extra Small</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label>Status: </label>
                    <select className="form-control" id="size-box"
                              {...register('status')}
                        >
                        <option value="Order Filed">Order Filed</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Item Delivered">Item Delivered</option>
                        <option value="Shipment Delayed">Shipment Delayed</option>
                        <option value="Undeliverable. Item Lost">Undeliverable. Item Lost</option>
                        <option value="Undeliverable. Item Damaged">Undeliverable. Item Damaged</option>
                        <option value="Undeliverable. Item Seized">Undeliverable. Item Seized</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Item" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )

}

