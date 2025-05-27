import React from "react";
import { Select, MenuItem } from "@mui/material";

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
            <MenuItem value="price">цена</MenuItem>
            <MenuItem value="living_area">жилая площадь</MenuItem>
            <MenuItem value="total_area">Общая площадь</MenuItem>
            <MenuItem value="travel_time">Время до метро</MenuItem>
            
            </Select>
           
        </div>
    )

}

export default HistogramOptions