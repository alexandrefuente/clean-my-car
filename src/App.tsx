import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NeedHelp from './pages/NeedHelp';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      {/* Creating router of navigation between pages */}
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='need-help' element={ <NeedHelp /> } />
        <Route path='forgot-password' element={ <ForgotPassword /> } />
        <Route path='dashboard' element={ <Dashboard /> } />
      </Routes>
    </div>
  );
}

export default App;
