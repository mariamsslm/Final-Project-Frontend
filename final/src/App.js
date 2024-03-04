import './App.css';
import { useState, useEffect, useContext } from 'react';
import AppRoutes from './routes/AppRoutes'
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext } from './context/authContext';
import axios from 'axios'

import LoadingPage from './pages/loadingPage';



const queryClient = new QueryClient();


 function App() {
  const { user, setUser, fetchUserDataone } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  async function getUser() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND}user/getone`
      );
      console.log(res);
      if (res) {
        console.log(res);
        console.log("user from app", res);
        setUser(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserDataone();
  }, []);
  useEffect(() => {
    getUser();
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      
      <div className="App">
        <AppRoutes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
