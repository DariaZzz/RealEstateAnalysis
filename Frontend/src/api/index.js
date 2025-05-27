async function getMetroStations() {

    const response = await fetch('http://localhost:5000/api/metro-stations');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return await response.json();
    
}

async function getFlats(metroStations, page = 1, perPage = 12) {
    const url = `http://localhost:5000/api/flats/?metro_stations=${metroStations.join(',')}&page=${page}&per_page=${perPage}`;
   const response = await fetch(url);

    if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
    return response.json()

}


export {
    getMetroStations,
    getFlats
}