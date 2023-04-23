import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import ScoresList from "./ScoresList";
import New from "./New";

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
      </BrowserRouter>
    </div>
  );
}

export default App;
