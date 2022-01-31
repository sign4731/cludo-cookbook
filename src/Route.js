import React from 'react'; // get the React object from the react module
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from "./templates/Start";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import Template5 from "./templates/Template5";

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div className="main-content">
                    <nav>
                        <ul className="sidebar">
                            <li>
                                <Link to="/">Start</Link>
                            </li>
                            <li>
                                <Link to="template-1">Template 1</Link>
                            </li>
                            <li>
                                <Link to="template-2">Template 2</Link>
                            </li>
                            <li>
                                <Link to="template-3">Template 3</Link>
                            </li>
                            <li>
                                <Link to="template-4">Template 4</Link>
                            </li>
                            <li>
                                <Link to="template-5">Template 5</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/template-1" element={<Template1 />} />
                        <Route path="/template-2" element={<Template2 />} />
                        <Route path="/template-3" element={<Template3 />} />
                        <Route path="/template-4" element={<Template4 />} />
                        <Route path="/template-5" element={<Template5 />} />
                        <Route path="/" element={<Start />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default AppRouter;
