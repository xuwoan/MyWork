import * as type from '../actionTypes';
import assign from 'object-assign';
import _ from 'lodash';

const initialState = {
    isLoadingUserCV: false,
    isErrorUserCV: false,
    stateAdding: false,
    stateDeleting: false,
    stateUpdating: false,

    dataDetail: {},
    dataList: []
};

export default function statistic(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_LIST_CV_USER_REQUEST:
            return {
                ...state,
                isLoadingUserCV: true,
            };
        case type.FETCH_LIST_CV_USER_SUCCESS: {

            console.log("LIST IN REDUCER", action.result)
            return {
                ...state,
                dataList: action.result,

                isErrorUserCV: false,
            }
        }
        case type.FETCH_LIST_CV_USER_FAILED:
            return {
                ...state,
                isErrorUserCV: true,
            }
        //-----------------------------------------------------------
        case type.FETCH_DETAIL_CV_USER_REQUEST:
            return {
                ...state,
                isLoadingUserCV: true,
            };
        case type.FETCH_DETAIL_CV_USER_SUCCESS: {

            console.log("DETAIL CV IN REDUCER", action.result)
            return {
                ...state,
                dataDetail: action.result.message,

                isErrorUserCV: false,
            }
        }
        case type.FETCH_DETAIL_CV_USER_FAILED:
            return {
                ...state,
                isErrorUserCV: true,
            }
        //-----------------------------------------------------------
        case type.FETCH_ADD_CV_USER_REQUEST:
            return {
                ...state,
                isLoadingUserCV: true,
                stateAdding: false,
            };
        case type.FETCH_ADD_CV_USER_SUCCESS: {

            console.log("REGIS IN REDUCER", action.result)
            return {
                ...state,
                stateAdding: true,
            }
        }
        case type.FETCH_ADD_CV_USER_FAILED:
            return {
                ...state,
                stateAdding: false,
            }
        //-----------------------------------------------------------
        case type.FETCH_REMOVE_CV_USER_REQUEST:
            return {
                ...state,
                isLoadingUserCV: true,
                stateDeleting: false,
            };
        case type.FETCH_REMOVE_CV_USER_SUCCESS: {

            console.log("REGIS IN REDUCER", action.result)
            return {
                ...state,
                stateDeleting: true,
            }
        }
        case type.FETCH_REMOVE_CV_USER_FAILED:
            return {
                ...state,
                stateDeleting: false,
            }
        //-----------------------------------------------------------
        case type.FETCH_UPDATE_CV_USER_REQUEST:
            return {
                ...state,
                isLoadingUserCV: true
             
            };
        case type.FETCH_UPDATE_CV_USER_SUCCESS: {

            console.log("REGIS IN REDUCER", action.result)
            return {
                ...state,
                stateUpdating: true,
            }
        }
        case type.FETCH_UPDATE_CV_USER_FAILED:
            return {
                ...state,
                stateUpdating: false,
            }
        case type.RESET_STATE_CV:

            {
                console.log("VÀO REDUCER",action.state)
                if (action.state === 1)
                    return {
                        ...state,
                        stateAdding: false,
                    }
                else if (action.state === 2)
                    {
                    console.log("ACTION",action.state)
                    return {
                        ...state,
                        stateUpdating: false,
                    }}
                else if (action.state === 3)
                    return {
                        ...state,
                        stateDeleting: false,
                    }
            }
        default:
            return state;
    }

}
