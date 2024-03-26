import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import NotFound from '../pages/NotFound/NotFound';


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null; 
  }

  const isAdmin = (user.Role === "admin") || user.Role === "user";

  if (!isAdmin) {
    return <NotFound/>
  }

  return children;
};

export default ProtectedRoute;
