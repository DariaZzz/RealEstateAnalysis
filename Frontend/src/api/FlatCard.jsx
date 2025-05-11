import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function FlatCard({
  flat,
}){
  

    return(
        <Card >
          <CardContent style={{
          padding:"14px",
        }}>
            <Typography style={{
              fontWeight:"600",
              color:"#3a8fe4",
              fontSize: "20px",
            }}>
              {flat.price} ₽
            </Typography>


            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",            
              
            }}>
              <Typography style={{
                fontSize:"12px",
                padding: "3px",
              }}>
                {flat.addres}
              </Typography>


              <Typography style={{
                fontSize:"12px",
                padding: "3px",
                justifySelf: "end"
              }}>
                <Link 
                  href={flat.url}
                  underline="none"
                  sx={{ color: "#1976d2" }} 
                >
                  Перейти на циан
                </Link>
              </Typography>


              <Box style={{
                fontSize:"12px",
                display: "flex",
                alignItems: "center",
                padding: "3px",
                fontFamily: '"Montserrat", sans-serif' 
              }}>
                <div 
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: flat.stationLineColor,
                    marginRight: 8
                  }}
                >
                </div>  
                {flat.metroStation}
              </Box>


              <Typography style={{
                fontSize:"12px",
                padding: "3px",
                justifySelf: "end"
              }}>
                {flat.travel_time} минут {flat.travel_type}
              </Typography>
            </div>
            
            
          </CardContent>
        </Card>
    )
}


export default FlatCard