import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard';
import { Error } from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoute } from './components';

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