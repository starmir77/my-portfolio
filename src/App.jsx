import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AACCaseStudy from "./pages/AACCaseStudy.jsx";
import CandyverseCaseStudy from "./pages/CandyverseCaseStudy.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aac" element={<AACCaseStudy />} />
        <Route path="/candyverse" element={<CandyverseCaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


