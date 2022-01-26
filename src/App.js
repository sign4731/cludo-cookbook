import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main-content">
        <nav>
          <ul className="sidebar">
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/template-1">Template 1</Link>
            </li>
            <li>
              <Link to="/template-2">Template 2</Link>
            </li>
            <li>
              <Link to="/template-3">Template 3</Link>
            </li>
            <li>
              <Link to="/template-4">Template 4</Link>
            </li>
            <li>
              <Link to="/template-5">Template 5</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/template-1" element={<Temp1 />} />
          <Route path="/template-2" element={<Temp2 />} />
          <Route path="/template-3" element={<Temp3 />} />
          <Route path="/template-4" element={<Temp4 />} />
          <Route path="/template-5" element={<Temp5 />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </div>
    </Router>
  );
}

function Start() {
  return (
    <div className="page-content">
      <h2>Home</h2>
      <p>Here is going to be some text...</p>
    </div>
  );
}

function Temp1() {
  return (
    <div className="page-content">
      <h2>Template 1</h2>
    </div>
  );
}
function Temp2() {
  return (
    <div className="page-content">
      <h2>Template 2</h2>
    </div>
  );
}
function Temp3() {
  return (
    <div className="page-content">
      <h2>Template 3</h2>
    </div>
  );
}
function Temp4() {
  return (
    <div className="page-content">
      <h2>Template 4</h2>
    </div>
  );
}
function Temp5() {
  return (
    <div className="page-content">
      <h2>Template 5</h2>
    </div>
  );
}
export default App;
