// import Hero from "./sections/Hero"
// import Nav from "./components/Nav"
// import Services from "./sections/Services"
// import Footer from "./sections/Footer"
// import Reviews from "./sections/Reviews"
// function App() {
//   return (
//     <main className="relative">
//       <Nav/>
//       <section className="xl:padding-l wide:padding-r padding-b">
//         <Hero/>
//       </section>
//       <section className="xl:padding-l wide:padding-r padding-b">
//         <Services/>
//       </section>
//       <section className="xl:padding-l wide:padding-r padding-b">
//         <Reviews/>
//       </section>
//       <section className="padding-y bg-black padding-x padding-t pb-8">
//         <Footer/>
//       </section>
//     </main>
//   )
// }
// export default App


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