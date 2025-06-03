import React from "react";
import { Select, MenuItem } from "@mui/material";

/**
 * ScatterOptions - компонент для выбора осей X и Y для scatter-графика
 *
 * @component
 * @param {string} axisX - Текущее значение оси X
 * @param {Function} setAxisX - Функция обновления значения оси X
 * @param {string} axisY - Текущее значение оси Y
 * @param {Function} setAxisY - Функция обновления значения оси Y
 * @returns {JSX.Element} Два селекта для выбора параметров осей графика
 */
function ScatterOptions({
    axisX,
    setAxisX,
    axisY,
    setAxisY
}) {
    // Доступные параметры для осей графика
    const axisOptions = [
        { value: "price", label: "Цена" },
        { value: "living_area", label: "Жилая площадь" },
        { value: "total_area", label: "Общая площадь" },
        { value: "travel_time", label: "Время до метро" },
        { value: "kitchen_area", label: "Площадь кухни" },
        { value: "floor", label: "Этаж" },
        { value: "total_floors", label: "Количество этажей" }
    ];

    return (
        <div style={{
            display: "flex",
            gap: "50px"
        }}>
            {/* Селектор для оси X */}
            <Select
                value={axisX}
                onChange={(e) => setAxisX(e.target.value)}
                size="small"
                sx={{ width: '200px' }}
            >
                {axisOptions.map((option) => (
                    <MenuItem
                        key={`x-${option.value}`}
                        value={option.value}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>

            {/* Селектор для оси Y */}
            <Select
                value={axisY}
                onChange={(e) => setAxisY(e.target.value)}
                size="small"
                sx={{ width: '200px' }}
            >
                {axisOptions.map((option) => (
                    <MenuItem
                        key={`y-${option.value}`}
                        value={option.value}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default ScatterOptions;