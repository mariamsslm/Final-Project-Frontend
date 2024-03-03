import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // If no user is authenticated, navigate to the login page
  if (!user) {
    navigate('/login');
    return null; // Returning null to prevent rendering of children until redirection
  }

  // Check if the user is authorized (admin or user)
  const isAdmin = (user.Role === "admin") || user.Role === "user";

  // If the user is not authorized, navigate to the not found page
  if (!isAdmin) {
    navigate('/not-found');
    return null; // Returning null to prevent rendering of children until redirection
  }

  // If the user is authorized, render the children components
  return children;
};

export default ProtectedRoute;
