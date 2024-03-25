import { Dashboard, Login, PrivateRoute, AuthWrapper, Error} from './pages';
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
         <Route path="/login" element={<Login/>} />
         <Route path="*" element={<Error />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App