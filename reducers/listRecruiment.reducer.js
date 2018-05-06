import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  isLoadingListRecruiment: false,
  isErrorListRecruiment: false,
  listcruiment: [],
  recruiment: {}
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_LIST_RECRUIMENT_REQUEST:
      return {
        ...state,
        isLoadingListRecruiment: true,
      };
    case type.FETCH_LIST_RECRUIMENT_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        listcruiment: action.result,
        isLoadingListRecruiment: false,
        isErrorListRecruiment: false,
      }
    }
    case type.FETCH_LIST_RECRUIMENT_FAILED:
      return {
        ...state,
        isLoadingListRecruiment: false,
        isErrorListRecruiment: true,
      }
    case type.FETCH_FILTER_RECRUIMENT_REQUEST:
      console.log("CO VAO");
      return {
        ...state,
        isLoadingListRecruiment: true,
      };
    case type.FETCH_FILTER_RECRUIMENT_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("FILTER RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        listcruiment: action.result,
        isLoadingListRecruiment: false,
        isErrorListRecruiment: false,
      }
    }
    case type.FETCH_FILTER_RECRUIMENT_FAILED:
      return {
        ...state,
        isLoadingListRecruiment: false,
        isErrorListRecruiment: true,
      }
    case type.FETCH_DETAIL_RECRUIMENT_REQUEST:
      console.log("CO VAO");
      return {
        ...state,
        isLoadingListRecruiment: true,
      };
    case type.FETCH_DETAIL_RECRUIMENT_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("DETAIL RECRUIMENT IN REDUCER", action.result)
      return {
        ...state,
        recruiment: action.result,
        isLoadingListRecruiment: false,
        isErrorListRecruiment: false,
      }
    }
    case type.FETCH_DETAIL_RECRUIMENT_FAILED:
      return {
        ...state,
        isLoadingListRecruiment: false,
        isErrorListRecruiment: true,
      }
    default:
      return state;
  }

}
