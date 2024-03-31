
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AuthWrapper from './components/AuthWrapper.jsx';
const App = () => {
  return (
    <AuthWrapper>
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
    </AuthWrapper>
  )
}

export default App