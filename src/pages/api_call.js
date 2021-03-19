import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import { recieveAPI } from "../store/news";
import EmployeeCard from "../components/api/EmployeeCard";

const APICallScreen = () => {
  const dispatch = useDispatch();
  const { api } = useSelector((state) => state.news);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // calling api endpoint to fetch employees data
    axios
      .get("http://185.44.64.217:27948/api/Employees/GetAllEmployees")
      .then((res) => dispatch(recieveAPI(res.data)))
      .catch((ex) => toast.error((ex.response && ex.response.data) || ex.message))
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="mt-5 d-flex justify-content-center gap-2 flex-wrap">
      {/* showing loader spinner if still fetching data */}
      {loading && (
        <div className="spinner-grow">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {/* showing each employee data after fetching */}
      {api.response.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
      {/* showing warnings and errors if response contains some */}
      <div className="d-flex gap-3">
        {api.warnings &&
          api.warnings.map((warn) => (
            <div className="alert alert-warning" key={warn.description}>
              <h3>{warn.description}</h3>
              <p>{warn.code}</p>
            </div>
          ))}
        {api.errors &&
          api.errors.map((error) => (
            <div className="alert alert-danger" key={error.description}>
              <h3>{error.description}</h3>
              <p>{error.code}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default APICallScreen;

// another way of calling the api
/* const get_employees = async () => {
    try {
      const { data } = await axios.get("http://185.44.64.217:27948/api/Employees/GetAllEmployees");
      dispatch(recieveAPI(data));
    } catch (ex) {
      // showing error notifcation on error calling api
      toast.error((ex.response && ex.response.data) || ex.message);
    } finally {
      setLoading(false);
    }
  }; */
