import Header from './components/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Lab from './pages/Lab';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/lab' element={<Lab />} />
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
