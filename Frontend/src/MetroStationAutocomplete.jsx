import React, {useState, useEffect} from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { getMetroStations } from "./api";

/**
 * MetroStationAutocomplete - компонент для выбора станций метро с автодополнением
 *
 * @component
 * @param {Function} setSelectedStations - Callback функция для обновления выбранных станций
 * @param {Array} selectedStations - Массив выбранных станций в формате {stationId, stationName, stationLineColor}
 * @returns {JSX.Element} Компонент Autocomplete для выбора станций метро
 */
function MetroStationAutocomplete({
    setSelectedStations,
    selectedStations,
}) {
    // Состояние для хранения списка всех станций метро
    const [metroStations, setMetroStations] = useState([]);

    // Загрузка данных станций метро при монтировании компонента
    useEffect(
        () => {
        async function fetchData () {
            const data = await getMetroStations();
            setMetroStations(data);
        }
        fetchData();
        }, []
    );

    return (
        <Autocomplete
        style={{width:'100%'}}
        multiple  // Разрешаем множественный выбор
        id="tags-standard"
        options={metroStations}  // Все доступные варианты станций
        getOptionLabel={(option) => option.stationName}  // Отображаемое название станции
        defaultValue={[]}  // Значение по умолчанию - пустой массив
        value={selectedStations}  // Текущие выбранные станции
        onChange={(event, newValue) => {setSelectedStations(newValue);  // Обработчик изменения выбора
           }}
        // Кастомизация отображения вариантов в выпадающем списке
        renderOption={(props, option) => {
          const { key, ...restProps } = props;
          return (
            <li key={option.stationId} {...restProps}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Круглый индикатор цвета линии метро */}
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: "#990066",
                    marginRight: 8
                  }}
                />
                {option.stationName}
              </div>
            </li>
          );
        }}
        // Кастомизация отображения выбранных значений
        renderValue={(value, getItemProps) =>
          value.map((option, index) => {
            const { key, ...itemProps } = getItemProps({ index });
            return (
              <Chip
                key={key}
                style={{ borderWidth: 2 }}
                variant="outlined"
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Круглый индикатор цвета линии метро */}
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: option.stationLineColor,
                        marginRight: 8
                      }}
                    />
                    {option.stationName}
                  </div>
                }
                {...itemProps}
                onDelete={itemProps.onDelete}  // Обработчик удаления станции
              />
            );
          })
        }
        // Кастомизация поля ввода
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Станции метро"
          />
        )}
      />
    )
}

export default MetroStationAutocomplete;