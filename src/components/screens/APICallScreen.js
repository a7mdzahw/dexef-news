import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import { recieveAPI } from "../../store/news";
import EmployeeCard from "../shared/EmployeeCard";

const APICallScreen = () => {
  const dispatch = useDispatch();
  const { api } = useSelector((state) => state.news);

  const [loading, setLoading] = React.useState(true);

  const get_employees = async () => {
    try {
      const { data } = await axios.get("http://185.44.64.217:27948/api/Employees/GetAllEmployees");
      console.log(data.response);
      dispatch(recieveAPI(data));
    } catch (ex) {
      toast.error((ex.response && ex.response.data) || ex.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    get_employees();
  }, []);

  return (
    <div className="mt-5 d-flex justify-content-center gap-2 flex-wrap">
      {loading && (
        <div className="spinner-grow">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {api.response.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default APICallScreen;
