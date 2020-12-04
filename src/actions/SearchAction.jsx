import AppConstants from '../constants';
import RequestService from '../service/request-service';

export default class SearchAction {
  static setDetailsData(data) {
    return ({
      type: AppConstants.SET_DETAILS_DATA,
      payload: {
        data,
      },
    });
  }

  static setFilteredSearchList(data) {
    return ({
      type: AppConstants.SET_SEARCH_LIST,
      payload: {
        data,
      },
    });
  }

  static getDetailsList(id) {
    const url = `http://api.tvmaze.com/shows/${id}?embed=episodes`;
    return dispatch => RequestService.fetch(url)
      .then(({ data }) => {
        console.log('details',data)
        dispatch(SearchAction.setDetailsData(data));
        return data.response;
      });
  }

  static getSearchList(searchText) {
    const url = `http://api.tvmaze.com/search/shows?q=${searchText}`;
    return dispatch => RequestService.fetch(url)
      .then(({ data }) => {
        dispatch(SearchAction.setFilteredSearchList(data));
      });
  }

}
