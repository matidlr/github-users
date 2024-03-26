
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import AuthRoute from './components/AuthRoute.jsx'

const App = () => {
  return (
    
    <BrowserRouter>
     <Routes>
        <Route path="/" 
            element={<AuthRoute>
                <Dashboard />
            </AuthRoute>}/>
         <Route path="/login" element={<Login />} />
         <Route path="*" element={<Error />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App