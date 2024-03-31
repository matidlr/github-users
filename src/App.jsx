
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const App = () => {
  return (
    
    <BrowserRouter>
     <Routes>
        <Route path="/" 
            element={<PrivateRoute>
                <Dashboard />
            </PrivateRoute>}/>
         <Route path="/login" element={<Login />} />
         <Route path="*" element={<Error />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App