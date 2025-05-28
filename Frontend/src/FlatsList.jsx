import React from "react";
import FlatCard from "./FlatCard";
import { Pagination } from '@mui/material';


function FlatsList({flats, pagination, onPageChange}){
    if (!flats.length) {
        return <p>Квартиры не найдены</p>;
    }
    return(
        <div>
            <div style={{
                marginTop: "20px", 
                display: "grid",
                width: "100%",        
                gap: "16px",    
                gridTemplateColumns: "1fr 1fr 1fr"    
            }}>
                {flats.map((flat) => (
                    <FlatCard key={flat.flatId} flat={flat} />
                ))}
            </div>
            <div style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}>
                <Pagination
                count={pagination.pages}
                page={pagination.current_page}
                onChange={(event, newPage) => onPageChange(newPage)}
                color="primary"
                showFirstButton
                showLastButton

                />
            </div>

        </div>
    )
}


export default FlatsList