import * as actionTypes from './actionTypes';
import {
    movieApi
} from '../../axios/axios';

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