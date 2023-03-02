import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

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
