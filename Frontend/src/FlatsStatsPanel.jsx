import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import { getFlats } from './api';
import Typography from '@mui/material/Typography';
import { Select, MenuItem} from "@mui/material";
import ScatterOptions from "./ScatterOptions";
import FlatScatter from "./FlatsScatter";
import { useDrawingArea } from "@mui/x-charts";
import { fetchAllFlats } from './api';
import HistogramOptions from "./HistogramOptions";
import FlatsHistogram from "./FlatsHistogram";

/**
 * Компонент панели статистики квартир с возможностью визуализации данных
 * @param {Object} props - Пропсы компонента
 * @param {Array} props.filteredFlats - Отфильтрованный список квартир
 * @param {Object} props.paginationData - Данные пагинации
 */
function FlatsStatsPanel({
  paginationData,
  selectedStations
}) {
  // Состояния компонента
  const [showChart, setShowChart] = useState(false); // Видимость графика
  const [chartType, setChartType] = useState("Scatter"); // Тип графика (Scatter/Histogram)
  const [axisX, setAxisX] = useState("price"); // Параметр для оси X
  const [axisY, setAxisY] = useState("living_area"); // Параметр для оси Y
  const [histogramAxisX, setHistogramAxisX] = useState("living_area"); // Параметр для гистограммы
  const [allFlats, setallFlats] = useState([]); // Параметр для гистограммы

  /**
   * Обработчик отображения графика
   */
  const handleShowChart = () => {
    setShowChart(true);
  };


  const allFetchFlats = async () => {
    try {
      const data = await fetchAllFlats(
        selectedStations.map(station => station.stationId)
      );
      setallFlats(data || []);
      
    } catch (error) {
      console.error('Ошибка загрузки квартир:', error);
    }
  };

  useEffect(() => {
    allFetchFlats();
    console.log(allFlats);
  }, [selectedStations]);

  /**
   * Рендерит компонент выбора параметров в зависимости от типа графика
   * @returns {JSX.Element|null} Компонент выбора параметров или null
   */
  const renderModalContent = () => {
    switch(chartType) {
      case 'Scatter':
        return (
          <ScatterOptions
            axisX={axisX}
            setAxisX={setAxisX}
            setAxisY={setAxisY}
            axisY={axisY}
          />
        );
      case 'Histogram':
        return (
          <HistogramOptions
            histogramAxisX={histogramAxisX}
            setHistogramAxisX={setHistogramAxisX}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Заголовок с количеством найденных квартир */}
      <div style={{ width: '100%' }}>
        <Typography style={{
          margin: "10px 10px 10px 0px",
          fontSize: "20px",
          fontWeight: "500",
        }}>
          Найдено {paginationData.total} Квартир
        </Typography>

        {/* Панель управления графиками */}
        <div style={{
          display: "flex",
          gap: "50px",
          marginBottom: "20px"
        }}>
          {/* Кнопка построения графика */}
          <Button
            variant="contained"
            onClick={handleShowChart}
          >
            Построить график
          </Button>

          {/* Выбор типа графика */}
          <Select
            value={chartType}
            onChange={(e) => {
              setChartType(e.target.value);
              console.log(e.target.value);
            }}
            size="small"
            sx={{ width: '200px' }}
          >
            <MenuItem value="Histogram">Scatter Plot</MenuItem>
            <MenuItem value="Scatter">Histogram</MenuItem>
          </Select>

          {/* Компонент выбора параметров графика */}
          {renderModalContent()}
        </div>
      </div>

      
      {/* Отображение выбранного графика */}
      {showChart && chartType === "Scatter" && (
        <FlatScatter
          data={allFlats.slice(0, 12)}
          axisX={axisX}
          axisY={axisY}
        />
      )}

      {showChart && chartType === "Histogram" && (
        <FlatsHistogram
          flats={allFlats}
          parameter={histogramAxisX}
        />
      )}
    </div>
  )
}

export default FlatsStatsPanel;