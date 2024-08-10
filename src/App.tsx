
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ConstructionPage from "./pages/ConstructionPage"
import ContactPage from './pages/ContactPage';
import MortgagePage from './pages/MortgagePage';
import TermsPage from './pages/TermsPage';
import SalesPage from './pages/SalesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Construction" element={<ConstructionPage/>} />
        <Route path="/ContactMe" element={< ContactPage/>} />
        <Route path="/Mortgage" element={<MortgagePage/>}/>
        <Route path="/RealEstates" element={<SalesPage/>}/>
        <Route path="/Terms&Conditions" element={<TermsPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;