import { put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actionTypes';
import { 
  AsyncStorage, 
} from 'react-native'; 
import * as selectors from '../selectors';
import { getRequest, postRequest,getdatafromapi,postuserfromapi ,postdatafromapi} from '../utils/request';
import Config from 'react-native-config';
import  {setItem} from '../utils/storage';
import {
  
    ToastAndroid,
  
  } from 'react-native';
  import  AppConstants  from '../constants/application.constants';
function* fetchUserInfo(action){
  try{
    
    let response = yield call(postuserfromapi,AppConstants.URL+"/account",action.params);
   // yield wait(1500);
    
    yield console.log("NO",response);
    if(response.token!== undefined)
      {
        setItem("mytoken",response.token);    
        ToastAndroid.show("Đăng nhập thành công",50) 
        yield put(actions.UserInfoSuccess(response.array));
      }
      else{
        ToastAndroid.show(response.array,50)
      }
    
    //await AsyncStorage.setItem('mytoken',response.token);
  }catch(error){
    console.log(error)
  }
}

export function* watchFetchUserInfo() {
  yield takeLatest(types.FETCH_USER_INFO_REQUEST, fetchUserInfo);
}

function* fetchUpdateUser(action){
  try{
    
    let response = yield call(postdatafromapi,AppConstants.URL+"/user/update",action.params);
   // yield wait(1500);
    
    yield console.log("NO",response);
    if(response.success=== true)
      {
        
        ToastAndroid.show("Update thông tin thành công",50) 
        yield put(actions.fetchUpdateUserSuccess(response.message));
      }
      else{
        ToastAndroid.show(response.message,50)
      }
    
    //await AsyncStorage.setItem('mytoken',response.token);
  }catch(error){
    console.log(error)
  }
}

export function* watchFetchUpdateUser() {
  yield takeLatest(types.FETCH_UPDATE_USER_REQUEST, fetchUpdateUser);
}