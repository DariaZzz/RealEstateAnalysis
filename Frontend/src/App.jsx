import { useEffect, useState } from 'react'
import FlatsStatsPanel from './FlatsStatsPanel';
import MetroStationAutocomplete from './MetroStationAutocomplete';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css'; 
import '@fontsource/montserrat/700.css'; 
import FlatsList from './FlatsList';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

function App() {
  const [selectedStations, setSelectedStations] = useState([]);
  const [filteredFlats, setFilteredFlats] = useState([]);

  return (
     <ThemeProvider theme={theme}>{
      <div style={{
        width: '1124px',
        margin: "0 auto",
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: "50px",
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}>
      
        <MetroStationAutocomplete 
          setSelectedStations={setSelectedStations}
          selectedStations={selectedStations}
        />

        <FlatsStatsPanel 
        selectedStations = {selectedStations}
        filteredFlats={filteredFlats}
        setFilteredFlats={setFilteredFlats}
        />
        

        <FlatsList
          flats={filteredFlats}
        />
      </div>
    }</ThemeProvider>
  )

  
}

export default App
