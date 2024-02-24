import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Herosection';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <HeroSection />
    </StyledEngineProvider>
  );
}


export default App;
