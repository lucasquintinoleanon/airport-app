import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { DataContext } from "../../contexts/DataContext";
import { CustomAutocomplete } from "./styles";
import { Airport, AutoCompleteProp } from "../../types";

//COMPONENET THAT SELECT ONE OF THE AVAILABLE AIRPORTS
export default function AutoCompleteInput({
  label,
  value,
  onSelect,
}: AutoCompleteProp) {
  const { airportsDefault, setCenter } = React.useContext(DataContext);
  const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: ({ name, iata_code }: Airport) => `${name} (${iata_code})`,
  });
  return (
    <CustomAutocomplete
      options={airportsDefault}
      autoHighlight
      value={value}
      loading={!airportsDefault.length}
      onChange={(event: any, newValue: Airport | null) => {
        //SELECT THE AIRPORT AND RECENTER MAP
        onSelect(newValue);
        if (newValue) {
          setCenter({ lat: newValue.lat, lng: newValue.lng });
        }
      }}
      getOptionLabel={(option: Airport) => option.name}
      filterOptions={filterOptions}
      renderOption={(props: any, option: Airport) => {
        return (
          <Box component="li" {...props} key={props.id}>
            {option.name} {option.iata_code && `(${option.iata_code})`}
          </Box>
        );
      }}
      renderInput={(params: any) => (
        <TextField
          {...params}
          label={label || ""}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
