import * as actionTypes from './actionsTypes';

export const saveResults = (res) => {
    return {
        type: actionTypes.STORE_RESULTS,
        result: res
    }
};

export const storeResults = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResults(result));
        },2000)
    }
};

export const deleteResults = (resultElementId) => {
    return {
        type: actionTypes.DELETE_RESULTS,
        resultElId: resultElementId
    }
};