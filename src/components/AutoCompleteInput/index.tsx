import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Airport, DataContext } from "../../contexts/DataContext";

type Prop = {
  label: string;
  onSelect: any;
  value: Airport
};

export default function AutoCompleteInput({ label, value, onSelect }: Prop) {
  const { airportsDefault } = React.useContext(DataContext);
  const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: (option: Airport) => option.name + option.iata_code,
  });
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={airportsDefault}
      autoHighlight
      value={value}
      // onInputChange={(event, newInputValue) => {
      //   handleReset()
      // }}
      onChange={(event: any, newValue: Airport | null) => {
        onSelect(newValue);
      }}
      getOptionLabel={(option: Airport) => option.name}
      filterOptions={filterOptions}
      // filterOptions={(options, { inputValue }) => options.filter(item => item?.name?.includes(inputValue) || item?.iata_code?.includes(inputValue) )}
      renderOption={(props, option: Airport) => (
        <Box component="li" {...props}>
          {option.name} ({option.iata_code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || ''}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
