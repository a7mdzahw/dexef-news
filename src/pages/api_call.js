import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import { recieveAPI } from "../store/news";
import EmployeeCard from "../components/api/EmployeeCard";
import EmployeeSkeleton from "../components/skeletons/EmployeeSkeleton";
import Skeleton from "react-loading-skeleton";

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
    <>
      {/* showing warnings and errors if response contains some */}
      <div className="d-flex justify-content-around gap-3 mb-0">
        {api.warnings &&
          api.warnings.map((warn) => (
            <div className="alert alert-warning w-50" key={warn.description}>
              <h3>{warn.description}</h3>
              <p>Code: {warn.code}</p>
            </div>
          ))}
        {api.errors &&
          api.errors.map((error) => (
            <div className="alert alert-danger w-50" key={error.description}>
              <h3>{error.description}</h3>
              <p>Code: {error.code}</p>
            </div>
          ))}
      </div>

      {loading ? (
        <Skeleton width="30vw" height="20px" />
      ) : (
        <h2 className="fw-bolder ms-3">Employees</h2>
      )}

      <div className="d-flex justify-content-start flex-wrap">
        {/* showing loader spinner if still fetching data */}
        {loading
          ? [1, 2, 3, 4].map((n) => <EmployeeSkeleton style={{ width: "50%" }} key={n} />)
          : // showing each employee data after fetching
            api.response.map((employee) => <EmployeeCard key={employee.id} employee={employee} />)}
      </div>
    </>
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
