import React from "react";
import Skeleton from "react-loading-skeleton";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="card" style={{ minWidth: "47%", margin: "1rem" }}>
      <div className="card-body">
        <div className="card-title d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex gap-2 align-items-center">
            <Skeleton circle width="50px" height="50px" />
            <h2 className="fw-bold p-0">{employee.name}</h2>
          </div>
          <span className="alert alert-success m-0 fw-bold ">{employee.deparment}</span>
        </div>
        <div className="card-text">
          <h4>Address</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Street</th>
                <th>City</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{employee.address.street}</td>
                <td>{employee.address.city}</td>
                <td>{employee.address.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {employee.address.subAddresses.length !== 0 && (
          <>
            <h5>Sub Addresses</h5>

            <table className="table">
              <thead>
                <tr>
                  <th>Street</th>
                  <th>City</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {employee.address.subAddresses.map((address, i) => (
                  <tr key={i}>
                    <td>{address.street}</td>
                    <td>{address.city}</td>
                    <td>{address.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
