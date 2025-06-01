import React from "react";
import FlatCard from "./FlatCard";
import { Pagination } from '@mui/material';

/**
 * Компонент для отображения списка квартир с пагинацией
 *
 * @component
 * @param {Object} props - Пропсы компонента
 * @param {Array} props.flats - Массив объектов квартир для отображения
 * @param {Object} props.pagination - Объект с данными пагинации
 * @param {number} props.pagination.pages - Общее количество страниц
 * @param {number} props.pagination.current_page - Текущая страница
 * @param {Function} props.onPageChange - Колбэк при изменении страницы
 * @returns {JSX.Element} Список карточек квартир с пагинацией или сообщение об отсутствии данных
 */
function FlatsList({ flats, pagination, onPageChange }) {
    // Если массив квартир пуст, показываем сообщение
    if (!flats.length) {
        return <p>Квартиры не найдены</p>;
    }

    return (
        <div>
            {/* Сетка карточек квартир */}
            <div style={{
                marginTop: "20px",
                display: "grid",
                width: "100%",
                gap: "16px",
                gridTemplateColumns: "1fr 1fr 1fr" // 3 колонки равной ширины
            }}>
                {flats.map((flat) => (
                    // Карточка квартиры с уникальным ключом
                    <FlatCard key={flat.flatId} flat={flat} />
                ))}
            </div>

            {/* Блок пагинации */}
            <div style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "center"
            }}>
                <Pagination
                    count={pagination.pages} // Общее количество страниц
                    page={pagination.current_page} // Текущая страница
                    onChange={(event, newPage) => onPageChange(newPage)} // Обработчик изменения страницы
                    color="primary" // Цвет элементов пагинации
                    showFirstButton // Показывать кнопку перехода к первой странице
                    showLastButton // Показывать кнопку перехода к последней странице
                />
            </div>
        </div>
    )
}

export default FlatsList;