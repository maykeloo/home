import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  
  return (
    <>
    <ParallaxProvider>
    <Router>
        <Home/>
      </Router>
    </ParallaxProvider>
    </>
  );
}

export default App;
