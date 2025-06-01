import React from "react";
import { ScatterChart } from '@mui/x-charts/ScatterChart';

/**
 * Компонент точечной диаграммы для визуализации зависимости между двумя параметрами квартир
 *
 * @component
 * @param {Object} props - Пропсы компонента
 * @param {Array} props.data - Массив объектов с данными о квартирах
 * @param {string} props.axisX - Название параметра для оси X (ключ в объекте данных)
 * @param {string} props.axisY - Название параметра для оси Y (ключ в объекте данных)
 * @returns {JSX.Element} Точечная диаграмма или сообщение об отсутствии данных
 */
function FlatScatter({ data, axisX, axisY }) {
  // Проверка наличия необходимых данных для отображения
  if (!data || data.length === 0 || !axisX || !axisY) {
    return <div>Нет данных для отображения графика</div>;
  }

  /**
   * Преобразует исходные данные в формат, подходящий для ScatterChart
   * @type {Array}
   * @property {number} x - Значение по оси X
   * @property {number} y - Значение по оси Y
   * @property {string} id - Уникальный идентификатор точки
   */
  const chartData = data.map((item) => ({
    x: item[axisX],  // Значение параметра для оси X
    y: item[axisY],  // Значение параметра для оси Y
    id: item.id || Math.random().toString(36).substring(7) // Генерация ID если отсутствует
  }));

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ScatterChart
        series={[
          {
            data: chartData,
            label: `${axisY} vs ${axisX}`, // Подпись серии данных
            color: '#1976d2', // Цвет точек
          },
        ]}
        xAxis={[
          {
            label: axisX, // Подпись оси X
            valueFormatter: (value) => `${value}`, // Форматирование значений
          },
        ]}
        yAxis={[
          {
            label: axisY, // Подпись оси Y
          },
        ]}
        width={600}
        height={400}
        margin={{ top: 20, right: 30, left: 70, bottom: 70 }} // Отступы для подписей
      />
    </div>
  );
};

export default FlatScatter;