async function getMetroStations() {
    return [
    {stationId: 1, stationName: "Комсомольская", stationLineColor: "#D92B2C"},
    {stationId: 2, stationName: "Охотный Ряд", stationLineColor: "#D92B2C"},
    {stationId: 3, stationName: "Библиотека имени Ленина", stationLineColor: "#D92B2C"},
    {stationId: 4, stationName: "Парк Культуры", stationLineColor: "#D92B2C"},
    {stationId: 5, stationName: "Университет", stationLineColor: "#D92B2C"},
    {stationId: 6, stationName: "Киевская", stationLineColor: "#0078BF"},
    {stationId: 7, stationName: "Смоленская", stationLineColor: "#0078BF"},
    {stationId: 8, stationName: "Арбатская", stationLineColor: "#0078BF"},
    {stationId: 9, stationName: "Площадь Революции", stationLineColor: "#0078BF"},
    {stationId: 10, stationName: "Краснопресненская", stationLineColor: "#0078BF"},
    {stationId: 11, stationName: "Белорусская", stationLineColor: "#D92B2C"},
    {stationId: 12, stationName: "Баррикадная", stationLineColor: "#D92B2C"},
    {stationId: 13, stationName: "Чистые пруды", stationLineColor: "#00B6A1"},
    {stationId: 14, stationName: "Таганская", stationLineColor: "#00B6A1"},
    {stationId: 15, stationName: "Марксистская", stationLineColor: "#00B6A1"},
    {stationId: 16, stationName: "Третьяковская", stationLineColor: "#00B6A1"},
    {stationId: 17, stationName: "Кропоткинская", stationLineColor: "#D92B2C"},
    {stationId: 18, stationName: "Маяковская", stationLineColor: "#D92B2C"},
    {stationId: 19, stationName: "Славянский бульвар", stationLineColor: "#0033A0"},
    {stationId: 20, stationName: "Крылатское", stationLineColor: "#0033A0"},
    {stationId: 21, stationName: "Шелепиха", stationLineColor: "#0033A0"},
    {stationId: 22, stationName: "Калужская", stationLineColor: "#FB7A15"},
    {stationId: 23, stationName: "Профсоюзная", stationLineColor: "#FB7A15"},
    {stationId: 24, stationName: "Новые Черемушки", stationLineColor: "#FB7A15"},
    {stationId: 25, stationName: "Юго-Западная", stationLineColor: "#FB7A15"},
    {stationId: 26, stationName: "Тропарево", stationLineColor: "#FB7A15"},
    {stationId: 27, stationName: "Румянцево", stationLineColor: "#006F6A"},
    {stationId: 28, stationName: "Саларьево", stationLineColor: "#006F6A"},
    {stationId: 29, stationName: "Тимирязевская", stationLineColor: "#0049A2"},
    {stationId: 30, stationName: "Алтуфьево", stationLineColor: "#0049A2"},
    {stationId: 31, stationName: "Владыкино", stationLineColor: "#0049A2"},
    {stationId: 32, stationName: "Петровско-Разумовская", stationLineColor: "#0049A2"},
    {stationId: 33, stationName: "Дмитровская", stationLineColor: "#0049A2"},
    {stationId: 34, stationName: "Савеловская", stationLineColor: "#0049A2"},
    {stationId: 35, stationName: "Белорусская", stationLineColor: "#0049A2"},
    {stationId: 36, stationName: "Красные ворота", stationLineColor: "#0049A2"},
    {stationId: 37, stationName: "Кузнецкий мост", stationLineColor: "#0049A2"},
    {stationId: 38, stationName: "Таганская", stationLineColor: "#0049A2"},
    {stationId: 39, stationName: "Лубянка", stationLineColor: "#0049A2"},
    {stationId: 40, stationName: "Китай-город", stationLineColor: "#0049A2"}
]
}

async function getFlats(metroStations) {
    let flats = [
  {flatId: 1, living_area: 18.5, total_area: 35.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 1, metroStation: "Комсомольская", travel_type: "пешком", travel_time: 5, price: 6500000, addres: "Ленинградский проспект, д. 8", kitchen_area: 8.0},
  {flatId: 2, living_area: 22.0, total_area: 45.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 2, metroStation: "Охотный Ряд", travel_type: "пешком", travel_time: 3, price: 10000000, addres: "Тверская ул., д. 12", kitchen_area: 12.0},
  {flatId: 3, living_area: 16.0, total_area: 30.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 3, metroStation: "Библиотека имени Ленина", travel_type: "пешком", travel_time: 4, price: 7000000, addres: "ул. Охотный Ряд, д. 2", kitchen_area: 7.5},
  {flatId: 4, living_area: 20.5, total_area: 40.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 4, metroStation: "Парк Культуры", travel_type: "пешком", travel_time: 6, price: 8500000, addres: "Кутузовский просп., д. 25", kitchen_area: 10.0},
  {flatId: 5, living_area: 25.0, total_area: 55.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 5, metroStation: "Университет", travel_type: "пешком", travel_time: 7, price: 9000000, addres: "просп. Вернадского, д. 78", kitchen_area: 11.0},
  {flatId: 6, living_area: 19.0, total_area: 38.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 6, metroStation: "Киевская", travel_type: "пешком", travel_time: 5, price: 7800000, addres: "Кутузовский просп., д. 2", kitchen_area: 9.0},
  {flatId: 7, living_area: 23.0, total_area: 50.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 6, metroStation: "Киевская", travel_type: "пешком", travel_time: 4, price: 9500000, addres: "пл. Киевского Вокзала, д. 1", kitchen_area: 12.5},
  {flatId: 8, living_area: 18.0, total_area: 36.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 7, metroStation: "Смоленская", travel_type: "пешком", travel_time: 6, price: 7000000, addres: "ул. Смоленская, д. 23", kitchen_area: 8.5},
  {flatId: 9, living_area: 21.5, total_area: 43.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 7, metroStation: "Смоленская", travel_type: "пешком", travel_time: 5, price: 8800000, addres: "Новая пл., д. 5", kitchen_area: 10.0},
  {flatId: 10, living_area: 20.0, total_area: 42.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 8, metroStation: "Арбатская", travel_type: "пешком", travel_time: 5, price: 8500000, addres: "Арбат ул., д. 12", kitchen_area: 10.0},
  {flatId: 11, living_area: 25.0, total_area: 54.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 9, metroStation: "Площадь Революции", travel_type: "пешком", travel_time: 2, price: 10500000, addres: "ул. Никольская, д. 8", kitchen_area: 11.5},
  {flatId: 12, living_area: 27.0, total_area: 60.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 10, metroStation: "Краснопресненская", travel_type: "пешком", travel_time: 5, price: 11000000, addres: "ул. Краснопресненская набережная, д. 10", kitchen_area: 12.0},
  {flatId: 13, living_area: 15.0, total_area: 30.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 11, metroStation: "Белорусская", travel_type: "пешком", travel_time: 6, price: 6400000, addres: "улица Бутырский Вал, д. 1", kitchen_area: 7.5},
  {flatId: 14, living_area: 24.0, total_area: 48.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 12, metroStation: "Баррикадная", travel_type: "пешком", travel_time: 6, price: 9200000, addres: "ул. Шмидта, д. 9", kitchen_area: 10.0},
  {flatId: 15, living_area: 19.5, total_area: 40.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 13, metroStation: "Чистые пруды", travel_type: "пешком", travel_time: 4, price: 7500000, addres: "ул. Покровка, д. 3", kitchen_area: 8.5},
  {flatId: 16, living_area: 20.0, total_area: 41.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 14, metroStation: "Таганская", travel_type: "пешком", travel_time: 7, price: 8200000, addres: "ул. Таганская, д. 15", kitchen_area: 9.5},
  {flatId: 17, living_area: 22.0, total_area: 47.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 15, metroStation: "Марксистская", travel_type: "пешком", travel_time: 5, price: 9000000, addres: "ул. Марксистская, д. 5", kitchen_area: 10.5},
  {flatId: 18, living_area: 18.0, total_area: 38.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 16, metroStation: "Третьяковская", travel_type: "пешком", travel_time: 5, price: 7800000, addres: "ул. Лаврушинский переулок, д. 2", kitchen_area: 9.0},
  {flatId: 19, living_area: 24.5, total_area: 51.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 17, metroStation: "Кропоткинская", travel_type: "пешком", travel_time: 4, price: 9300000, addres: "Кропоткинский переулок, д. 10", kitchen_area: 12.0},
  {flatId: 20, living_area: 27.0, total_area: 58.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 18, metroStation: "Маяковская", travel_type: "пешком", travel_time: 5, price: 11000000, addres: "Петровка ул., д. 18", kitchen_area: 13.0},
  {flatId: 21, living_area: 20.0, total_area: 42.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 19, metroStation: "Славянский бульвар", travel_type: "пешком", travel_time: 6, price: 8000000, addres: "ул. Вавилова, д. 2", kitchen_area: 9.5},
  {flatId: 22, living_area: 23.0, total_area: 48.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 20, metroStation: "Крылатское", travel_type: "пешком", travel_time: 8, price: 9200000, addres: "ул. Крылатская, д. 11", kitchen_area: 10.5},
  {flatId: 23, living_area: 17.0, total_area: 34.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 21, metroStation: "Шелепиха", travel_type: "пешком", travel_time: 5, price: 6900000, addres: "ул. Шелепихинская, д. 3", kitchen_area: 8.0},
  {flatId: 24, living_area: 22.0, total_area: 46.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 22, metroStation: "Калужская", travel_type: "пешком", travel_time: 6, price: 8600000, addres: "просп. Калужский, д. 7", kitchen_area: 10.0},
  {flatId: 25, living_area: 26.0, total_area: 56.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 23, metroStation: "Профсоюзная", travel_type: "пешком", travel_time: 7, price: 9500000, addres: "ул. Профсоюзная, д. 12", kitchen_area: 11.0},
  {flatId: 26, living_area: 20.5, total_area: 41.5, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 24, metroStation: "Новые Черемушки", travel_type: "пешком", travel_time: 8, price: 8100000, addres: "ул. Черемушкинская, д. 25", kitchen_area: 9.0},
  {flatId: 27, living_area: 19.0, total_area: 37.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 25, metroStation: "Юго-Западная", travel_type: "пешком", travel_time: 5, price: 7700000, addres: "ул. Коштоянца, д. 57", kitchen_area: 9.0},
  {flatId: 28, living_area: 22.0, total_area: 45.0, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 26, metroStation: "Тропарево", travel_type: "пешком", travel_time: 9, price: 8500000, addres: "ул. Профсоюзная, д. 77", kitchen_area: 10.0},
]



    if(metroStations.length ===0){
        return flats
    }

    return flats.filter((flat) =>  metroStations.includes(flat.stationId))

}


export {
    getMetroStations,
    getFlats
}