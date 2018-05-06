import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';

import * as selectors from '../selectors';
import { getdatafromapi } from '../utils/request';
import Config from 'react-native-config';
import * as utils from '../utils';
import  AppConstants  from '../constants/application.constants';


function* fetchListExperience(data){
  try{
    
    let response = yield call(getdatafromapi,AppConstants.URL+"/experience/all", {})
    console.log("exp in saga",response)
    yield put(actions.fetchListExperienceSuccess(response))
  }catch(error){

  }
}

 function* watchFetchExperience() {
  yield takeLatest(types.FETCH_LIST_EXPERIENCE_REQUEST, fetchListExperience);
}

export default watchFetchExperience;