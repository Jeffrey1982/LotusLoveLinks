import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/Landingpage/LandingPage';
import HomeComponent from './components/Home/HomeComponent';
import AuthLogin from './components/Auth/Login';
import AuthRegister from './components/Auth/Register';
import UserProfile from './components/UserProfile/UserProfile';
import Layout from './components/Layout';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Route for Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Other routes with Layout */}
          <Route path="/home" element={<Layout><HomeComponent /></Layout>} />
          <Route path="/login" element={<Layout><AuthLogin /></Layout>} />
          <Route path="/register" element={<Layout><AuthRegister /></Layout>} />
          <Route path="/profile" element={<Layout><PrivateRoute /></Layout>} />

          {/* Fallback route */}
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
