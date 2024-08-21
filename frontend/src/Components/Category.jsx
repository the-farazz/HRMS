import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { TbCategory } from "react-icons/tb";

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status) {
                setCategory(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3><TbCategory/> Category List</h3>
        </div>
        <Link to="/dashboard/add_category" className='btn bn'>Add Category</Link>
        <div className='mt-3 text-dark'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-heading'>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map((c,i) => (
                            <tr key={i} className='category-link'>
                                <td><Link to={`/dashboard/category/${c.id}`} className='link-style text-dark'>{c.name}</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Category