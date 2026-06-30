
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import SalesPage from './pages/SalesPage';

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => { window.location.replace(to); }, [to]);
  return null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Construction" element={<ExternalRedirect to="https://www.adelbinconstruction.com" />} />
        <Route path="/ContactMe" element={<ContactPage/>} />
        <Route path="/Mortgage" element={<ExternalRedirect to="https://www.contourmortgage.com/lob/adelbin-imani" />} />
        <Route path="/RealEstates" element={<SalesPage/>}/>
        <Route path="/Terms&Conditions" element={<TermsPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;