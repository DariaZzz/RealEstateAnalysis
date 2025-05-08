import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { getMetroStations, getFlats } from './api';



function App() {
  const [selectedStations, setSelectedStations] = useState([]);
  const [metroStations, setMetroStations] = useState([]);
  const [filteredFlats, setFilteredFlats] = useState([]);
  



  

  useEffect(
    () => {
      async function fetchData () {
        const data = await getMetroStations();
        setMetroStations(data);
      }
      fetchData();
    }, []
  );

  useEffect(() => {

  
    async function fetchFlats () {
      const data = await getFlats(selectedStations.map(station => station.stationId));
      console.log(data)
      setFilteredFlats(data);
    }
    fetchFlats();
    
    
  }, [selectedStations]);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: '50px',
      boxSizing: 'border-box',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>
    
      <Autocomplete
        style={{width:'100%'}}
        multiple
        id="tags-standard"
        options={metroStations}
        getOptionLabel={(option) => option.stationName}
        defaultValue={[]}
        value={selectedStations}
        onChange={(event, newValue) => {setSelectedStations(newValue);
           }}
        renderOption={(props, option) => {
          const { key, ...restProps } = props; 
          return (
            <li key={key} {...restProps}> 
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div 
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: option.stationLineColor,
                    marginRight: 8
                  }}
                />
                {option.stationName}
              </div>
            </li>
          );
        }}
        renderValue={(value, getItemProps) =>
          value.map((option, index) => {
            const { key, ...itemProps } = getItemProps({ index });
            return (
              <Chip 
                key={key} 
                style={{ borderWidth: 2 }} 
                variant="outlined" 
                label={ 
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div 
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: option.stationLineColor,
                        marginRight: 8
                      }}
                    />
                    {option.stationName}
                  </div>
                }
                {...itemProps} 
                onDelete={itemProps.onDelete}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Станции метро"
          />
        )}
      />

      <div style={{
        width:'100%'
      }}>
        <p>Найдено {filteredFlats.length} Квартир</p>

        <Button variant="contained">Ебануть график</Button>
      </div>
    </div>
  )

  
}

export default App
