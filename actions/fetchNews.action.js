import * as types from '../actionTypes';
export const fetchAllNews = (params) => ({
    type: types.FETCH_ALL_NEWS_REQUEST,
    params,
});
export const fetchAllNewsSuccess = (result) => ({
    type: types.FETCH_ALL_NEWS_SUCCESS,
    result,
});

export const fetchAllNewsFailed = (error) => ({
    type: types.FETCH_ALL_NEWS_FAILED,
    error,
});
export const fetchDetailNews = (params) => ({

    type: types.FETCH_DETAIL_NEWS_REQUEST,
    params,
});
export const fetchDetailNewsSuccess = (result) => ({
    type: types.FETCH_DETAIL_NEWS_SUCCESS,
    result,
});
export const fetchDetailNewsFailed = (error) => ({
    type: types.FETCH_DETAIL_NEWS_FAILED,
    error,
});
