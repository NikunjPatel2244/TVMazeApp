import AppConstants from '../constants';

const initialState = {
  detailsData: {},
  searchFilteredList: undefined,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.SET_DETAILS_DATA: {
      return {
        ...state,
        detailsData: action.payload.data
      };
    }

    case AppConstants.SET_SEARCH_LIST: {
      return {
        ...state,
        searchFilteredList: action.payload.data
      };
    }
    default:
      return state;
  }
};

export default SearchReducer;
