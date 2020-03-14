import * as actionTypes from '../actions/actionTypes';

import { fetchingState } from '../../common/fetchingHelper';

const initialState = {
    topRatedMoviesStatus: {
        data: null,
        ...fetchingState,
    },
};

const executeGetDataFetching = state => {
    return {
        ...state,
        topRatedMoviesStatus: {
            ...state.topRatedMoviesStatus.data,
             isFetching: true,
             isFetched: false,
         }
    }
};
const executeGetDataSuccess = (state, action) => {
    console.log(action);
    return {
        ...state,
        topRatedMoviesStatus: {
            data: action.data,
            isFetching: false,
            isFetched: true,
        }
    }
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_FETCHING:
            return executeGetDataFetching(state);
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action);
        default:
            return state;
    }
};

export default moviesReducer;