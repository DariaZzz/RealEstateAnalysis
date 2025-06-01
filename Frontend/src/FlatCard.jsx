import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

/**
 * Компонент карточки квартиры для отображения основной информации
 *
 * @component
 * @param {Object} props - Пропсы компонента
 * @param {Object} props.flat - Объект с данными о квартире
 * @param {number} props.flat.price - Цена квартиры
 * @param {string} props.flat.url - Ссылка на объявление
 * @param {number} props.flat.number_of_rooms - Количество комнат
 * @param {number} props.flat.total_area - Общая площадь
 * @param {number} props.flat.floor - Этаж квартиры
 * @param {number} props.flat.total_floors - Всего этажей в доме
 * @param {number} props.flat.travel_time - Время до метро
 * @param {string} props.flat.travel_type - Тип передвижения ("пешком"/"на машине")
 * @param {string} props.flat.stationLineColor - Цвет линии метро
 * @param {string} props.flat.metroStation - Название станции метро
 * @param {string} props.flat.address - Адрес квартиры
 * @returns {JSX.Element} Карточка с информацией о квартире
 */

function FlatCard({
  flat,
}){
   /**
   * Форматирует цену согласно локали (добавляет пробелы между разрядами)
   * @param {number} price - Цена квартиры
   * @returns {string} Отформатированная строка с ценой
   */
  const formatPrice = (price)=> {
    return new Intl.NumberFormat('ru-RU').format(price);
  }

    return(
        <Card >
          <CardContent style={{
          padding:"14px",
        }}>
            <Box style={{
                fontSize:"12px",
                display: "flex",
                alignItems: "center",
                padding: "3px",
                justifyContent: "space-between",
                fontFamily: '"Montserrat", sans-serif' 
              }}>
                
            <Typography style={{
              fontWeight:"600",
              color:"#3a8fe4",
              fontSize: "20px",
            }}>
              {formatPrice(flat.price)}
               ₽
            </Typography>

            <Typography style={{
                fontSize:"12px",
                padding: "3px",
                textAlign: "right",
              }}>
                <Link 
                  href={flat.url}
                  underline="none"
                  sx={{ color: "#1976d2" }} 
                >
                  Перейти на циан
                </Link>
              </Typography>
            </Box>
            


            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",            
            
            }}>
              <Typography style={{
                fontSize:"12px",
                padding: "3px",
              }}>
                {flat.number_of_rooms}-комн.кв {flat.total_area}м. кв {flat.floor}/{flat.total_floors}
              </Typography>


               <Typography style={{
                display: "flex",
                fontSize:"12px",
                padding: "3px",
                justifyContent: "end",
                alignItems: 'center',
                textAlign: 'right'
                
              }}>
                {flat.travel_time} минут {flat.travel_type}
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
                    minWidth: 12,
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
                display: "flex",
                justifyContent: "end",
                alignItems: 'center',
                textAlign: 'right'
              }}>
                {flat.address}   
              </Typography>

             
            </div>
            
            
          </CardContent>
        </Card>
    )
}


export default FlatCard