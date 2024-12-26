import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if(!token){
    navigate('/');
  }
  }, [navigate]);
  
  return <>{children}</>
};

export default ProtectedRoute;