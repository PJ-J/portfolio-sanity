import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import SinglePerson from './components/SinglePerson'
import Person from './components/Person'
import Project from './components/Project'
import NavBar from "./components/NavBar"

function App() {
  return (
   <BrowserRouter>
   <NavBar />
     <Routes>
       <Route element={<Home />} path='/' exact="true" />
       <Route element={<About />} path='/about' />
       <Route element={<SinglePerson />} path='/person/:slug' />
       <Route element={<Person />} path='/person' />
       <Route element={<Project />} path='/project' />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
