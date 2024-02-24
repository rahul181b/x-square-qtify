import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
    </StyledEngineProvider>
  );
}


export default App;
