import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
