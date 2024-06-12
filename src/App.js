import "./App.css";
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Ourteam from "./Components/Ourteam/Ourteam";
import Services from "./Pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />}>
            <Route path="Ourteam" element={<Ourteam />} />
          </Route>
          <Route path="Services" element={<Services />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
