import React from 'react';
import Sidebar from './sidebar';
import Footer from './footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  // switch to page based on props?
  // flex sidebar on left ... page on right

  return (
    <div>
      <div className="d-flex">
        <Sidebar/>
        <div className="flex-grow-1 page">
          <Home>

          </Home>
          <Projects>

          </Projects>
          <Contact>

          </Contact>
        </div>
      </div>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
