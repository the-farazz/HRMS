import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStarAndCrescent } from "react-icons/fa";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  const [name, setName] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/detail/" + id)
      .then((result) => {
        setEmployee(result.data[0]);
        axios.get('http://localhost:3000/category/name/'+result.data[0].category_id)
        .then(res => {
            setName(res.data[0])
            console.log(res.data)
        })
        .catch(err => console.log(err))
      })
      .catch((err) => console.log(err));

      
  }, []);
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/employee/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="col  m-0">
        <h4 className=" d-flex text-dark justify-content-center shadow navbar1">
        <FaStarAndCrescent /> Employee Management System 
        </h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <img
          src={`http://localhost:3000/Images/` + employee.image}
          className="emp_det_image"
        />
        <div className="d-flex align-items-center flex-column mt-5">
          <h3>Name: {employee.name}</h3>
          <h3>Email: {employee.email}</h3>
          <h3>Salary: ${employee.salary}</h3>
          <h3>Field: {name.name}</h3>
        </div>
        <div>
          <button className="btn bn me-2">Edit</button>
          <button className="btn bn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
