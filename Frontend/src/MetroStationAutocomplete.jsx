import React, {useState, useEffect} from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { getMetroStations } from "./api";


function MetroStationAutocomplete({
    setSelectedStations,
    selectedStations,
}) {

    
    const [metroStations, setMetroStations] = useState([]);

    useEffect(
        () => {
        async function fetchData () {
            const data = await getMetroStations();
            setMetroStations(data);
        }
        fetchData();
        }, []
    );

    return (
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
    )
}

export default MetroStationAutocomplete