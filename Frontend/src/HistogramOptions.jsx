import React from "react";
import { Select, MenuItem } from "@mui/material";

/**
 * Компонент выбора параметра для построения гистограммы
 *
 * @param {Object} props - Входные параметры компонента
 * @param {string} props.histogramAxisX - Текущее выбранное значение оси X
 * @param {Function} props.setHistogramAxisX - Функция для изменения значения оси X
 * @returns {JSX.Element} Компонент выбора параметра гистограммы
 */
function HistogramOptions({
    histogramAxisX,
    setHistogramAxisX,


}){
    return(
        <div style={{
            display: "flex",
            gap: "50px"
        }}>
            <Select
            value={histogramAxisX}
            onChange={(e) => setHistogramAxisX(
                e.target.value)
            }
            size="small"
            sx={{ width: '200px' }}
            >
            
            <MenuItem value="living_area">Жилая площадь</MenuItem>
            <MenuItem value="total_area">Общая площадь</MenuItem>
            <MenuItem value="kitchen_area">Площадь кухни</MenuItem>
            <MenuItem value="travel_time">Время до метро</MenuItem>
            <MenuItem value="number_of_rooms">Количество комнат</MenuItem>
            <MenuItem value="floor">Этаж</MenuItem>
            <MenuItem value="total_floors">Количество этажей</MenuItem>

            </Select>

        </div>
    )

}

export default HistogramOptions