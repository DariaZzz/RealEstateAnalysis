import { useEffect, useState } from 'react'
import FlatsStatsPanel from './FlatsStatsPanel';
import MetroStationAutocomplete from './MetroStationAutocomplete';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css'; 
import '@fontsource/montserrat/700.css'; 
import FlatsList from './FlatsList';
import { getFlats } from './api';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/**
 * Тема Material-UI с настройками шрифта Montserrat
 */

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

/**
 * Основной компонент приложения для отображения списка квартир
 * с возможностью фильтрации по станциям метро и пагинацией
 */

function App() {
  const [selectedStations, setSelectedStations] = useState([]);
  const [filteredFlats, setFilteredFlats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    pages: 1,
    total: 0
  });

    /**
   * Загружает список квартир с учетом фильтров и пагинации
   * @param {number} page - Номер страницы для загрузки (по умолчанию 1)
   */
  const fetchFlats = async (page = 1) => {
    console.log(page)
    try {
      const data = await getFlats(
        selectedStations.map(station => station.stationId),
        page,
        12
      );
      setFilteredFlats(data.data || []);
      setPaginationData(data.pagination || {});
      setCurrentPage(page);
    } catch (error) {
      console.error('Ошибка загрузки квартир:', error);
    }
  };

  useEffect(() => {
    fetchFlats(currentPage);
  }, [selectedStations, currentPage]);

  /**
   * Обработчик изменения страницы пагинации
   * @param {number} newPage - Новая страница для отображения
   */

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    setPaginationData(
      {
        ...paginationData,
        current_page: newPage,
      }
    )
  }

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
          setSelectedStations={(data) => {setSelectedStations(data);onPageChange(1);}}
          selectedStations={selectedStations}

        />

        <FlatsStatsPanel 
        paginationData={paginationData}
        filteredFlats={filteredFlats}
       
        />
        

        <FlatsList
          flats={filteredFlats}
          pagination={paginationData}
          onPageChange={onPageChange}
        />
      </div>
    }</ThemeProvider>
  )

  
}

export default App
