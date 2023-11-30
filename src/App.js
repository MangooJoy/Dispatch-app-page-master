import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Top10 from "./Pages/Top10";
import News from "./Pages/News";
import Photos from "./Pages/Photos";
import Video from "./Pages/Videos";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import ArticlePage from "./Pages/ArticlePage";
import PhotosPage from "./Pages/PhotosPage";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Top10" element={<Top10 />} />
        <Route path="/News" element={<News />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Video" element={<Video />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/ArticlePage/:id" element={<ArticlePage />} />
        <Route path="/PhotosPage/:id" element={<PhotosPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
