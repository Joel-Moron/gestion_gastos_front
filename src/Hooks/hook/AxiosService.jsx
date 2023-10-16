import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AxiosService() {
  let navigate = useNavigate();
  const apiUrl = 'http://localhost:8000/api/';

  const getID = () => {
    const tokenString = localStorage.getItem("userId");
    return JSON.parse(tokenString);
  };

  const saveData = (data) => {
    localStorage.setItem("userName", JSON.stringify(data.name));
    localStorage.setItem("userFirstName", JSON.stringify(data.apellido));
    localStorage.setItem("userId", JSON.stringify(data.id));
  };

  const deleteData = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userId");
    navigate("/");
  };

  const http = axios.create({
    baseURL: apiUrl,
    headers: {
       "Content-type": "application/json",
    },
 });

  return {
    getID,
    deleteData,
    setData: saveData,
    http,
  };
}
