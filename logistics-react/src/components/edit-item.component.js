import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "../axiosinstance";
import {useForm} from "react-hook-form";

export default function EditItem(){
    //Retrieves id from URL
    const { id } = useParams();
    //Initializing item and item's components used in the form
    const [item, setItem] = useState({});
    const {register, reset, handleSubmit} = useForm();

    const onSubmit = (data) => {
        //Deletes all object keys that has no value, i.e === ''
        for (let variable in data) {
            if (data[variable] === '') {
                delete data[variable];
            }
        }
        console.log(data)
        //Updates the item
        axios.put('items/'+ id, data)
            .then(res => {
                console.log(res.data)
                window.location = '/'
            })
            .catch(err => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        axios.get('items/' + id)
            .then(res => {
                //Sets the item with the requested item
                setItem(res.data)
                //Updates the item, this is used to change the defaultValues of the form
                reset(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [id, reset])

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
                             {...register('size')} defaultValue={item.size}
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
                              {...register('status')} defaultValue={item.status}
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

