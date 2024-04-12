import { VALUERESULT } from '../actions/types';

const initialState = {
  searchValue: [],
};

const someReducer = (state = initialState, action) => {
    console.log('state', state);
  switch (action.type) {
    case VALUERESULT:
      return {
        ...state,
        searchValue: state.searchValue
      };
    default:
      return state;
  }
};

export default someReducer;