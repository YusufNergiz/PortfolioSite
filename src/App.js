import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function App() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
