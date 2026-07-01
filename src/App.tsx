import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import ScrollToHash from "./components/utils/ScrollToHash"

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App