import Nav from "./components/nav";
import Home from "./pages/home";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./pages/menu";
function App() {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
