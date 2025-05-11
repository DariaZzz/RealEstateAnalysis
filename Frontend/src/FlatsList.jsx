import React from "react";
import FlatCard from "./FlatCard";


function FlatsList({flats}){
    if (!flats.length) {
        return <p>Квартиры не найдены</p>;
    }
    return(
        <div style={{
            marginTop: "20px", 
            display: "grid",
            width: "100%",        
            gap: "16px",    
            gridTemplateColumns: "1fr 1fr 1fr"    
        }}>
            {flats.map((flat) => (
                <FlatCard key={flat.id} flat={flat} />
            ))}
        </div>

    )
}


export default FlatsList