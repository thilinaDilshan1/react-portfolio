import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import About from '../../Pages/About/About';
import Skills from '../../Pages/Skills/Skills';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';

export default function NavRouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
      </BrowserRouter>
    </div>
  )
}