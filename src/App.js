import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header.js";
import Footer from "./components/common/footer.js";
import Home from "./pages/home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
