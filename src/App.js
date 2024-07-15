import React from 'react';
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Loginpage from './pages/Loginpage';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/authContext';

function App(){
  return(
    <AuthProvider>
    <Router basename="/Somveer-Duhan/cognify.git">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard"/>}/>
        <Route path ="/login" element={<Loginpage/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/dashboard" element={<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}
export default App;
// The ProtectedRoute component ensures that only authenticated users 
// can access certain routes in your application. If a user tries to access
// a protected route without being authenticated, they are redirected to the login page.

