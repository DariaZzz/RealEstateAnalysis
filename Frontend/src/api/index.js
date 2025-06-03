/**
 * API модуль для работы с данными о метро и квартирах
 * @module api
 */

/**
 * Получает список станций метро с сервера
 * @async
 * @function getMetroStations
 * @returns {Promise<Array>} Массив объектов станций метро
 * @throws {Error} Ошибка при неудачном запросе
 */
async function getMetroStations() {
    const response = await fetch('http://localhost:5000/api/metro-stations');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}

/**
 * Получает список квартир с возможностью фильтрации по станциям метро и пагинацией
 * @async
 * @function getFlats
 * @param {Array<number>} metroStations - Массив ID станций метро для фильтрации
 * @param {number} [page=1] - Номер страницы
 * @param {number} [perPage=12] - Количество элементов на странице
 * @returns {Promise<Object>} Объект с данными о квартирах и пагинацией
 * @throws {Error} Ошибка при неудачном запросе
 */
async function getFlats(metroStations, page = 1, perPage = 12) {
    const url = new URL('http://localhost:5000/api/flats/');
    url.searchParams.append('page', page);
    url.searchParams.append('per_page', perPage);

    if (metroStations && metroStations.length > 0) {
        url.searchParams.append('metro_stations', metroStations.join(','));
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

async function fetchAllFlats(metroStations) {
    let allFlats = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        const response = await fetch(
            `http://localhost:5000/api/flats/?metro_stations=${metroStations.join(',')}&page=${page}&per_page=100`
        );
        const data = await response.json();
        
        allFlats.push(...data.data);
        hasMore = data.pagination.has_next;
        page++;
    }

    return allFlats;
}

export {
    getMetroStations,
    getFlats,
    fetchAllFlats
}