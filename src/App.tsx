import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '@pages/Home';
import Project from '@/pages/Project'
import Contact from '@/pages/Contact'
import Experience from './pages/Experience';
import Layout from '@components/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Project />} />
          <Route path='experience' element={<Experience />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App