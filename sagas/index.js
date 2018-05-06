import { fork } from 'redux-saga/effects';

import watchFetchListDepartment from './fetchListDepartment.saga';
import watchFetchListExperience from './fetchListExperience.saga';
import watchFetchListGender from './fetchListGender.saga';
import watchFetchListJob from './fetchListJob.saga';
import watchFetchListProvince from './fetchListProvince.saga';
import watchFetchListTypeJob from './fetchListTypeJob.saga';
import {watchFetchUserInfo,watchFetchUpdateUser} from './fetchUserInfo.saga';
import watchFetchUserToken from './fetchToken.saga';
import { watchFetchListRecruiment,watchFetchFilterRecruiment,watchFetchDetailRecruiment} from './fetchListRecruiment.saga';
import { watchFetchAddRecruiment,watchFetchUserRecruiment,watchFetchDeleteRecruiment,watchFetchUserDetailRecruiment,watchUpdateDetailRecruiment} from './fetchUserRecruiment.saga';
import watchfetchDataAnalysis from './fetchAnalysis.saga';
import { watchfetchAllNews,watchfetchDetailNews} from './fetchNews.saga';
import { watchfetchDetailCV,watchfetchListCVUser,watchfetchUpdateCV,watchfetchAddCV,watchfetchRemoveCV} from './fetchUserCV.saga';
import { watchfetchNumCVtoEmployer,watchfetchListCVtoEmployer,watchfetchAddCVtoEmployer,watchfetchRemoveCVtoEmployer,watchfetchcheckUserCVTE} from './fetchCVtoEmployer.saga';
import watchFetchRegister from './fetchRegister.saga';
function* rootSagas() {
  yield [
    fork(watchFetchUserToken),
    fork(watchFetchRegister),
    fork(watchFetchListDepartment),
    fork(watchFetchListExperience),
    fork(watchFetchListGender),
    fork(watchFetchListJob),
    fork(watchFetchListProvince),
    fork(watchFetchListTypeJob),
    fork(watchFetchUserInfo),
    fork(watchFetchListRecruiment),
    fork(watchFetchListRecruiment),
    fork(watchFetchFilterRecruiment),
    fork(watchFetchDetailRecruiment),
    fork(watchFetchUpdateUser),
    fork(watchfetchDataAnalysis),
    fork(watchfetchAllNews),
    fork(watchfetchDetailNews),
    fork(watchFetchAddRecruiment),
    fork(watchFetchUserRecruiment),
    fork(watchFetchDeleteRecruiment),
    fork(watchFetchUserDetailRecruiment),
    fork(watchUpdateDetailRecruiment),
    fork(watchfetchDetailCV),
    fork(watchfetchListCVUser),
    fork(watchfetchUpdateCV),
    fork(watchfetchAddCV),
    fork(watchfetchRemoveCV),
    fork(watchfetchNumCVtoEmployer),
    fork(watchfetchListCVtoEmployer),
    fork(watchfetchAddCVtoEmployer),
    fork(watchfetchRemoveCVtoEmployer),
    fork(watchfetchcheckUserCVTE)

  ];
}

export default rootSagas;
