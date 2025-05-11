import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import { getFlats } from './api';
import Typography from '@mui/material/Typography';

function FlatsStatsPanel({
    selectedStations,
        filteredFlats,
        setFilteredFlats,
    
})
{

    

    useEffect(() => {

  
    async function fetchFlats () {
      const data = await getFlats(selectedStations.map(station => station.stationId));
      console.log(data)
      setFilteredFlats(data);
    }
    fetchFlats();
    
    
  }, [selectedStations]);


    return(
    <div style={{
        width:'100%'
      }}>
        <Typography style={{
           margin: "10px 10px 10px 0px",
           fontSize: "20px",
           fontWeight: "500",
        }}>
            Найдено {filteredFlats.length} Квартир
            </Typography>
       

        <Button variant="contained">Ебануть график</Button>
      </div>)
}

export default FlatsStatsPanel