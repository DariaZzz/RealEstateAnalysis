import React from "react";
import { ScatterChart } from '@mui/x-charts/ScatterChart';



function FlatScatter ({ data, axisX, axisY }) {
  if (!data || data.length === 0 || !axisX || !axisY) {
    return <div>Нет данных для отображения графика</div>;
  }


  const chartData = data.map((item) => ({
    x: item[axisX],  
    y: item[axisY],  
    id: item.id || Math.random().toString(36).substring(7) 
  }));

  console.log(chartData)

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ScatterChart
        series={[
          {
            data: chartData,
            label: `${axisY} vs ${axisX}`,
            color: '#1976d2',
          },
        ]}
        xAxis={[
          {
            label: axisX,
           
            valueFormatter: (value) => `${value}`,
          },
        ]}
        yAxis={[
          {
            label: axisY,
          
            
          },
        ]}
        width={600}
        height={400}
      />
    </div>
  );
};

export default FlatScatter