import * as actionTypes from './actionTypes';
import {
    movieApi
} from '../../axios/axios';
import {urlsHelper} from "../../common/urlsHelper";

const getDataFetching = () => {
    return {
        type: actionTypes.GET_DATA_FETCHING,
    }
};

const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
};
const getRecommendationsFetching = () => {
    return {
        type: actionTypes.GET_RECOMMENDATIONS_FETCHING,
    }
};

const getRecommendationsSuccess = (data) => {
    return {
        type: actionTypes.GET_RECOMMENDATIONS_SUCCESS,
        data: data
    }
};

const getSearchItemsFetching = (query) => {
    return {
        type: actionTypes.GET_SEARCH_FETCHING,
        query
    }
};

const getSearchItemsSuccess = (data, query) => {
    return {
        type: actionTypes.GET_SEARCH_SUCCESS,
        data: data,
        query
    }
};

export const getData = (url) => {
    return (dispatch) => {
        dispatch(getDataFetching());
        movieApi.get(url)
            .then(response => {
                dispatch(getDataSuccess(response.data.results));
            })
            .catch(error => {
                //TODO: handle the error when implemented
            })
    }
};

export const getRecommendations = (movieId) => {
    return (dispatch) => {
        dispatch(getRecommendationsFetching());
        movieApi.get(`/movie/${movieId}/recommendations`)
            .then(response => {
                dispatch(getRecommendationsSuccess(response.data.results));
            })
            .catch(error => {
                //TODO: handle the error when implemented
            })
    }
};
export const getSearchItems= (query) => {
    return (dispatch) => {
        if (query !== '') {
            dispatch(getSearchItemsFetching(query));
            movieApi.get(urlsHelper.SEARCH_MOVIE, {
                params: {
                    query
                }
            })
                .then(response => {
                    dispatch(getSearchItemsSuccess(response.data.results, query));
                })
                .catch(error => {
                    //TODO: handle the error when implemented
                })
        } else {
            dispatch(getSearchItemsSuccess([], query))
        }
    }
};
