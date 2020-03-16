import * as actionTypes from '../actions/actionTypes';

import { fetchingState } from '../../common/fetchingHelper';

const initialState = {
    topRatedMoviesStatus: {
        data: [],
        ...fetchingState,
    },
    getRecommendationsStatus: {
        data: [],
        ...fetchingState,
    },
    searchItemsStatus: {
        data: [],
        query: '',
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
    return {
        ...state,
        topRatedMoviesStatus: {
            data: action.data,
            isFetching: false,
            isFetched: true,
        }
    }
};

const executeGetRecommendationsFetching = state => {
    return {
        ...state,
        getRecommendationsStatus: {
            ...state.getRecommendationsStatus.data,
             isFetching: true,
             isFetched: false,
         }
    }
};
const executeGetRecommendationsSuccess = (state, action) => {
    return {
        ...state,
        getRecommendationsStatus: {
            data: action.data,
            isFetching: false,
            isFetched: true,
        }
    }
};
const executeGetSearchItemsFetching = state => {
    return {
        ...state,
        searchItemsStatus: {
            ...state.searchItemsStatus.data,
             isFetching: true,
             isFetched: false,
         }
    }
};
const executeGetSearchItemsSuccess = (state, action) => {
    return {
        ...state,
        searchItemsStatus: {
            isFetched: true,
            data: action.data,
            isFetching: false,
            query: action.query,
        }
    }
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_FETCHING:
            return executeGetDataFetching(state);
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action);
        case actionTypes.GET_RECOMMENDATIONS_FETCHING:
            return executeGetRecommendationsFetching(state);
        case actionTypes.GET_RECOMMENDATIONS_SUCCESS:
            return executeGetRecommendationsSuccess(state, action);
        case actionTypes.GET_SEARCH_FETCHING:
            return executeGetSearchItemsFetching(state);
        case actionTypes.GET_SEARCH_SUCCESS:
            return executeGetSearchItemsSuccess(state, action);
        default:
            return state;
    }
};

export default moviesReducer;
