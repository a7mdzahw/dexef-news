import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="card" style={{ width: "75%" }}>
      <div className="card-body">
        <div className="card-title d-flex justify-content-between gap-3">
          <h2 className="display-6">{employee.name}</h2>
          <span className="alert alert-success p-1">{employee.deparment} Deparment</span>
        </div>
        <div className="card-text">
          <h3>Address</h3>
          <div className="d-flex gap-5">
            <p>
              <strong>Street: </strong>
              {employee.address.street}
            </p>
            <p>
              <strong>City: </strong>
              {employee.address.city}
            </p>
            <p>
              <strong>Country: </strong>
              {employee.address.country}
            </p>
          </div>
        </div>
        {employee.address.subAddresses.length !== 0 && (
          <div className="card-text">
            <h4>Sub Addresses</h4>
            {employee.address.subAddresses.map((address, i) => (
              <div className="d-flex gap-5" key={i}>
                <p>
                  <strong>Street: </strong>
                  {address.street}
                </p>
                <p>
                  <strong>City: </strong>
                  {address.city}
                </p>
                <p>
                  <strong>Country: </strong>
                  {address.country}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
