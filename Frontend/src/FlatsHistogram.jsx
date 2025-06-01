import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';

/**
 * Компонент гистограммы для визуализации распределения квартир по заданному параметру
 *
 * @component
 * @param {Object} props - Пропсы компонента
 * @param {Array} props.flats - Массив объектов с данными о квартирах
 * @param {string} props.parameter - Название параметра для анализа (ключ в объекте квартиры)
 * @returns {JSX.Element} Гистограмма распределения квартир или сообщение об отсутствии данных
 */
function FlatsHistogram({ flats, parameter }) {
  // Проверка наличия данных для отображения
  if (!flats || flats.length === 0 || !parameter) {
    return <div>Нет данных для отображения</div>;
  }

  /**
   * Подсчитывает количество квартир для каждого значения параметра
   * @param {Array} flats - Массив объектов квартир
   * @returns {Object} Объект с количеством квартир для каждого значения параметра
   *                  (например, {2: 15, 3: 10} для параметра 'number_of_rooms')
   */
  const parameterCounts = flats.reduce((acc, flat) => {
    const key = flat[parameter];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  /**
   * Преобразует данные для отображения в BarChart
   * @type {Array}
   * @property {string} parameterValue - Значение параметра
   * @property {number} count - Количество квартир с этим значением
   * @property {string} id - Уникальный идентификатор (совпадает с parameterValue)
   */
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
            label: parameter, // Подпись оси X (название параметра)
          },
        ]}
        yAxis={[
          {
            label: 'Количество квартир', // Подпись оси Y
          },
        ]}
        series={[
          {
            dataKey: 'count',
            label: `Количество квартир по ${parameter}`,
            color: '#1976d2', // Синий цвет столбцов
          },
        ]}
        width={600}
        height={400}
        margin={{ top: 20, right: 30, left: 70, bottom: 70 }} // Отступы для подписей
      />
    </div>
  );
};

export default FlatsHistogram;