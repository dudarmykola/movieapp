import * as actionTypes from './actionTypes';
import axios from '../../axios';

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

export const getData = (url, props) => {
    return (dispatch) => {
        dispatch(getDataFetching());
        axios.get(url)
            .then(response => {
                dispatch(getDataSuccess(response.data.results));
            })
            .catch(error => {
                //TODO: handle the error when implemented
            })
    }
};