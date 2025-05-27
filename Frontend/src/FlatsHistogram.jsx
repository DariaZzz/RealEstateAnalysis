import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';



function FlatsHistogram ({ flats, parameter }) {
 if (!flats || flats.length === 0 || !parameter) {
    return <div>Нет данных для отображения</div>;
  }


  const parameterCounts = flats.reduce((acc, flat) => {
    const key = flat[parameter];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

 
  const chartData = Object.entries(parameterCounts).map(([key, count]) => ({
    parameterValue: key,
    count: count,
    id: key,
  }));

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <BarChart
        dataset={chartData}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'parameterValue',
            label: parameter,
          },
        ]}
        yAxis={[
          {
            label: 'Количество квартир',
          },
        ]}
        series={[
          {
            dataKey: 'count',
            label: `Количество квартир по ${parameter}`,
            color: '#1976d2',
          },
        ]}
        width={600}
        height={400}
        margin={{ top: 20, right: 30, left: 70, bottom: 70 }}
      />
    </div>
  );

};

export default FlatsHistogram