import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navigation/Navigation";

function App() {
  // const rootElement = document.getElementById("root");
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/head" element={<Header />} /> */}
          <Route path="/foot" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
