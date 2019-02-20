import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULTS:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULTS:
            return deleteResult(state, action);

    }

    return state;
};

export default reducer;