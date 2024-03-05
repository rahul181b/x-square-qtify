import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Herosection';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchNewAlbum, fetchSongs, fetchTopAlbum } from './api/api';

function App() {
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data }
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbum);
    generateData("newAlbums", fetchNewAlbum);
    generateData("songs", fetchSongs);
  }, []);

  useEffect(() => {
    if (data.topAlbums && data.newAlbums) {
      setSearchData([...data.topAlbums, ...data.newAlbums]);
    }
  }, [data.topAlbums, data.newAlbums]);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={searchData} />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </StyledEngineProvider>
  );
}

export default App;
