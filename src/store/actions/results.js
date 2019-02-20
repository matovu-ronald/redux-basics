import * as actionTypes from './actionTypes';

export const saveResults = (res) => {
    return {
        type: actionTypes.STORE_RESULTS,
        result: res
    }
};

export const storeResults = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
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