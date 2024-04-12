const initialState = {
    selectedAutocompleteData: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_AUTOCOMPLETE_DATA':
        return {
          ...state,
          selectedAutocompleteData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;