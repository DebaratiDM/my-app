import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/common/Footer";
import { About } from "./pages/About";
import { Header } from "./components/common/Header";
import { Contact } from "./pages/Contact";
import { Post } from "./pages/Post";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
