async function getMetroStations() {
    return [
        {stationId: 1, stationName: "Юго-Западная", stationLineColor: "#f00"},
        {stationId: 2,stationName: "Тропарево", stationLineColor: "#f00"},
        {stationId: 3,stationName: "Румянцево", stationLineColor: "#0f0"},
        {stationId: 4,stationName: "Саларьево", stationLineColor: "#f00"},
        {stationId: 5,stationName: "Юго-Северная", stationLineColor: "#f00"},
        {stationId: 6,stationName: "Лугов Филат", stationLineColor: "#f00"},
        {stationId: 7,stationName: "Аллергическая", stationLineColor: "#f00"},
        {stationId: 8,stationName: "Перко-Прокнулово", stationLineColor: "#f00"},
        {stationId: 9,stationName: "Буржуйка", stationLineColor: "#f00"},
        {stationId: 0,stationName: "Ломоносовский проспект", stationLineColor: "#ff0"},
    ]
}

async function getFlats(metroStations) {
    let flats = [
        {flatId: 1, url: "https://www.cian.ru/sale/flat/309402383/", stationId: 4 ,metroStation: "Саларьево",travel_type: "Пешком",travel_time: 12 , price: 6680000, addres: "ул. Коштоянца д. 57",stationLineColor: "#f00"},
        {flatId: 2,url: "https://www.cian.ru/sale/flat/309402383/",  stationId: 6 ,metroStation: "Лугов Филат",travel_type: "Пешком",travel_time: 12 , price: 470000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
        {flatId: 3,url: "https://www.cian.ru/sale/flat/309402383/", stationId: 7, metroStation: "Аллергическая",travel_type: "Пешком",travel_time: 12 , price: 480000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
        {flatId: 4,url: "https://www.cian.ru/sale/flat/309402383/", stationId: 9 , metroStation: "Буржуйка",travel_type: "Пешком",travel_time: 12 , price: 480000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
        {flatId: 5,url: "https://www.cian.ru/sale/flat/309402383/",  stationId: 5 ,metroStation: "Юго-Северная",travel_type: "Пешком",travel_time: 12 , price: 480000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
        {flatId: 6,url: "https://www.cian.ru/sale/flat/309402383/",  stationId: 1 ,metroStation: "Юго-Западная",travel_type: "Пешком",travel_time: 12 , price: 600000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
        {flatId: 7,url: "https://www.cian.ru/sale/flat/309402383/", stationId: 3, metroStation: "Румянцево",travel_type: "Пешком",travel_time: 12 , price: 480000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
        {flatId: 8,url: "https://www.cian.ru/sale/flat/309402383/",  stationId: 8 ,metroStation: "Перко-Прокнулово",travel_type: "Пешком",travel_time: 12 , price: 480000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
        {flatId: 9,url: "https://www.cian.ru/sale/flat/309402383/",  stationId: 4 ,metroStation: "Саларьево",travel_type: "Пешком",travel_time: 12 , price: 480000, addres: "ул. Коштоянца д. 57", stationLineColor: "#f00"},
       
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