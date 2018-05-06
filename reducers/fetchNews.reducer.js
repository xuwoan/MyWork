import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoadingListNews: false,
  isErrorListNews: false,
  listnews1: [],
  listnews2: [],
  news: {}
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_ALL_NEWS_REQUEST:
      return {
        ...state,
        isLoadingListNews: true,
      };
    case type.FETCH_ALL_NEWS_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        listnews1: action.result.data1,
        listnews2: action.result.data2,
        isLoadingListNews: false,
        isErrorListNews: false,
      }
    }
    case type.FETCH_ALL_NEWS_FAILED:
      return {
        ...state,
        isLoadingListNews: false,
        isErrorListNews: true,
      }

    case type.FETCH_DETAIL_NEWS_REQUEST:
      console.log("CO VAO");
      return {
        ...state,
        isLoadingListNews: true,
      };
    case type.FETCH_DETAIL_NEWS_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("DETAIL NEWS IN REDUCER", action.result)
      return {
        ...state,
        news: action.result,
        isLoadingListNews: false,
        isErrorListNews: false,
      }
    }
    case type.FETCH_DETAIL_NEWS_FAILED:
      return {
        ...state,
        isLoadingListNews: false,
        isErrorListNews: true,
      }
    default:
      return state;
  }

}
