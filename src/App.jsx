import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import HomePage from "./pages/HomePage/HomePage";
import UploadComplete from "./components/UploadComplete/UploadComplete";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="UploadComp" element={<UploadComplete />} />
          <Route path="/Upload" element={<UploadPage />} />
          <Route path="videos/:videoId" element={<MainVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
