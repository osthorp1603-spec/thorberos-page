import { Routes,Route } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { Home } from "./pages/Home"
import { Software } from "./pages/Software"
import { Games } from "./pages/Games"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Services } from "./pages/Services"


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/software" element={<Software/>}/>
        <Route path="/juegos" element={<Games/>}/>
        <Route path="/nosotros" element={<About/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/servicios" element={<Services/>}/>
      </Routes>

    </Layout>
    
          
    </>
  )
}

export default App
