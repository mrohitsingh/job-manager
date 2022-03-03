import "./App.css";
import Home from "./components/Home";
import AddJobs from "./components/AddJobs";
import Jobs from "./components/Jobs";
import Preview from "./components/Preview";
import Job from "./components/Job";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addjob" element={<AddJobs />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/jobs/:id" element={<Job />} />
          <Route exact path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
