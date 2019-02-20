export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';


export const  increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
};

export const storeResults = (result) => {
    return {
        type: STORE_RESULTS,
        result: result
    }
};

export const deleteResults = (resultElementId) => {
    return {
        type: DELETE_RESULTS,
        resultElId: resultElementId
    }
};