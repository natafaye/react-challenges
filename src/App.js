import { Navbar, Nav } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Challenge1 from "./Challenge1";
import Challenge2 from "./Challenge2";
import Challenge3 from "./Challenge3";
import Challenge4 from "./Challenge4";

function App() {
  return (
    <>
      <Navbar style={{ background: "#3e244f" }} variant="dark">
        <div className="container">
          <Navbar.Brand as={NavLink} to="/">Challenges</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/challenge/1">#1</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/2">#2</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/3">#3</Nav.Link>
            <Nav.Link as={NavLink} to="/challenge/4">#4</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="container mt-3">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenge/1" element={<Challenge1 />} />
            <Route path="/challenge/2" element={<Challenge2 />} />
            <Route path="/challenge/3" element={<Challenge3 />} />
            <Route path="/challenge/4" element={<Challenge4 />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
