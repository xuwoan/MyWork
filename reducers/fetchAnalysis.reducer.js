import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
  
  isError: false,
  data:[],
};

export default function statistic(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_DATA_ANALYSIS_REQUEST:
   
      return {
        ...state,
        
      };
    case type.FETCH_DATA_ANALYSIS_SUCCESS: {
      // const cateTemp = state.categories.categories.concat(action.result.data);
      console.log("ANALYSIS job ", action.result)
      return {
        ...state,
        data: action.result,
       
        isError: false,
      }
    }
    case type.FETCH_DATA_ANALYSIS_FAILED:
      return {
        ...state,
        
        isError: true,
      }
   default:
            return state;
  }
   
}
