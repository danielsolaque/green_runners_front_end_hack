import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import ScoresList from "./ScoresList";
import New from "./New";
// import ShowOne from "./ShowOne";
// import Edit from "./Edit";
// import Footer from "./Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<ScoresList />} />
          <Route path="/scores/new" element={<New />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
