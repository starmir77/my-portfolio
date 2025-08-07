import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AACCaseStudy from "./pages/AACCaseStudy.jsx";
import CandyverseCaseStudy from "./pages/CandyverseCaseStudy.jsx";
import StilaXRCaseStudy from "./pages/StilaXRCaseStudy.jsx";
import FTCaseStudy from "./pages/FTCaseStudy.jsx";
import AdRulesCaseStudy from "./pages/AdRulesCaseStudy.jsx";
import Footer from "./components/Footer.jsx";
import useGATracking from "./useGATracking.js";


function App() {
  useGATracking();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aac" element={<AACCaseStudy />} />
        <Route path="/candyverse" element={<CandyverseCaseStudy />} />
        <Route path="/stilaxr" element={<StilaXRCaseStudy />} />
        <Route path="/friendlytransfer" element={<FTCaseStudy />} />
        <Route path="/advertisers" element={<AdRulesCaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


