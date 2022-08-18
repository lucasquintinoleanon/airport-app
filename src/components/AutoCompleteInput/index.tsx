import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Airport, DataContext } from "../../contexts/DataContext";
import { styled } from "@mui/material/styles";

type Prop = {
  label: string;
  onSelect: any;
  value: Airport
};

const CustomAutocomplete: any = styled(Autocomplete)(({ theme }) => ({
  width: '18vw',
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("xl")]: {
    width:'16vw',
  },
}));


export default function AutoCompleteInput({ label, value, onSelect }: Prop) {
  const { airportsDefault } = React.useContext(DataContext);
  const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: (option: Airport) => option.name + option.iata_code,
  });
  return (
    <CustomAutocomplete
      id="country-select-demo"
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
      renderOption={(props: any, option: Airport) => (
        <Box component="li" {...props}>
          {option.name} ({option.iata_code})
        </Box>
      )}
      renderInput={(params: any) => (
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
