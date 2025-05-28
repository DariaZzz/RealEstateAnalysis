import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import { getFlats } from './api';
import Typography from '@mui/material/Typography';
import { Select, MenuItem} from "@mui/material";
import ScatterOptions from "./ScatterOptions";
import FlatScatter from "./FlatsScatter";
import { useDrawingArea } from "@mui/x-charts";
import HistogramOptions from "./HistogramOptions";
import FlatsHistogram from "./FlatsHistogram";


function FlatsStatsPanel({
        filteredFlats,
        paginationData, 
})
{
  const [showChart, setShowChart] = useState(false);
  const [chartType, setChartType] = useState("Scatter"); 
  const [axisX, setAxisX] = useState("price");
  const [axisY, setAxisY] = useState("living_area");
  const [histogramAxisX, setHistogramAxisX] = useState("price");
  

  const handleShowChart = () => {
    setShowChart(true);
  };

  

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

    return(
      <div>
        <div style={{
            width:'100%'
          }}>
            <Typography style={{
              margin: "10px 10px 10px 0px",
              fontSize: "20px",
              fontWeight: "500",
            }}>
                Найдено {filteredFlats.length} Квартир
                </Typography>
            <div style={{
              display: "flex",
              gap: "50px",
              marginBottom: "20px"
            }}> 
              <Button
              variant="contained"
              onClick={handleShowChart}
              >
                Построить график
              </Button>
              
            
              <Select
                value={chartType}
                onChange={(e) => {setChartType(
                  e.target.value);
                  console.log(e.target.value);}
                }
                size="small"
                sx={{ width: '200px' }}
              >
                <MenuItem value="Scatter">scatter</MenuItem>
                <MenuItem value="Histogram">histogram</MenuItem>
                
              </Select>
            

            {renderModalContent()}
            </div>
          </div>

          {showChart && chartType ==="Scatter" &&(<FlatScatter
            data = {filteredFlats}
            axisX={axisX}
            axisY={axisY}
          />)}

          {showChart && chartType ==="Histogram" &&(<FlatsHistogram
            flats = {filteredFlats}
            parameter={histogramAxisX}
            
          />)}
      </div>
    )
}

export default FlatsStatsPanel