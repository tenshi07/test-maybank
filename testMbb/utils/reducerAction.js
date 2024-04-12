export const selectAutocompleteData = (selectedData) => {
  return {
    type: 'SELECT_AUTOCOMPLETE_DATA',
    payload: selectedData,
  };
};