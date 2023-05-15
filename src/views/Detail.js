import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
// 1. get id from params (useParams)
// 2. use the id to send API and display on load (axios useEffect)
// 3. var change: useState

const Detail = () => {
    const [coffee, setCoffee] = useState(null)

    const { _id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/coffees/${_id}`)
            .then(res=>setCoffee(res.data))
            .catch(error=>console.log(error))
    },[_id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/coffees/${_id}`)
            .then(res => navigate(`/`))
            .catch(error => console.log(error))
    }

    return (
        <div>
            {
                coffee ?
                
                    <div className='container'>
                        <p><Link to="/"> Home</Link></p>
                        <h2>Name: {coffee.name}</h2>
                        <h2>Description: {coffee.description}</h2>
                        <h2 className='text-success'>Price: {coffee.price}</h2>
                        <h2>in Stock: {coffee.inStock && "This is a remote position"}</h2>
                        <Link className='btn btn-outline-warning text-black me-2' to={`/coffees/${_id}/update`}>Edit</Link>
                        <Link className='btn btn-outline-warning text-black me-2' to='/'>Back</Link>
                        <button type="button" className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
                    </div> :
                    
                    <h1>loading... </h1>
                    
            }

        </div>
    )
}

export default Detail
