import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fullstack from "./pages/Fullstack";
import Diseño from "./pages/Diseno";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/diseno" element={<Diseño />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
