import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaStarAndCrescent } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";
import axios from "axios";
import './style.css'

const Dashboard = () => {
  const anvigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(result => {
      if(result.data.Status) { 
        localStorage.removeItem("valid")
        anvigate('/')
      }
    })
  }
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100 sidebar">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-decoration-none"
            >
              <span className="fs-5 fw-bolder fst-italic d-none d-sm-inline">
                Crescent Technologies <FaStarAndCrescent/>
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="/dashboard"
                  className="px-0 align-middle"
                >
                  <i className="fs-4 ms-2"><RiDashboardFill/></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="px-0 align-middle "
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/category"
                  className=" px-0 align-middle "
                >
                  <i className="fs-4  ms-2"><TbCategory/></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
              <Link
                  className="px-0 align-middle "
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
            <div className="p-0 d-flex justify-content-center shadow navbar">
                <p>Crescent HR Management System <FaStarAndCrescent/> </p>
            </div>
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
