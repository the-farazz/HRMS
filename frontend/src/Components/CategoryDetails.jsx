import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const CategoryDetails = () => {
    const [employee, setEmployee] = useState([]);
    const [name, setName] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/category/name/'+id)
        .then(result => {
            setName(result.data[0])
            console.log(result.data)
        })
        .catch(err => console.log(err))

        axios.get('http://localhost:3000/category/detail/'+id)
        .then(result => {
            setEmployee(result.data)

        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <div className="d-flex justify-content-center">
            <h3>Department Name: {name.name} </h3>
        </div>

        <div className="d-flex justify-content mx-3">
            <h4>List of Employees in the Department:</h4>
        </div>
        <div className="mt-3 text-dark">
        <table className="table text-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e,i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="employee_image"
                  />
                </td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoryDetails