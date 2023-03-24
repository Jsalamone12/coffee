import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

// 1. call API on Load: axios, UseEffect
// 2. variable change: useState
// 3. Links: Link

const Dashboard = () => {
    const [coffeeList, SetCoffeeList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/coffees`)
            .then(res => {
                SetCoffeeList(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleDelete = (deleteId=>{
        axios.delete(`http://localhost:8000/api/coffees/${deleteId}`)
            .then(res=>{
                const filteredList = coffeeList.filter((eachCoffee)=>eachCoffee._id !== deleteId)
                SetCoffeeList(filteredList)
            })
            .catch(error=>console.log(error))
    })

    return (
        <div>
            <p><Link to="/coffees/new"> Create New Product</Link></p>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>In Stock</th>
                        <th colSpan={(2)}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coffeeList.map((eachCoffee, idx) => (
                            <tr key={idx}>
                                <td> <Link to={`/coffees/${eachCoffee._id}`}>{eachCoffee.name} </Link></td>
                                <td>{eachCoffee.description}</td>
                                <td>{eachCoffee.price}</td>
                                <td>{eachCoffee.inStock ? "Yes" : "No"}</td>
                                <td> <Link className='btn btn-outline-warning text-black me-2' to={`/coffees/${eachCoffee._id}`}>Edit</Link>
                                    <button className='btn btn-outline-danger text-black' onClick={() => handleDelete(eachCoffee._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
