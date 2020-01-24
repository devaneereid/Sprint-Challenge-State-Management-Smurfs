import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    FETCHING_SMURF_POST
} from '../actions/index';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state, 
                smurfs: [],
                isFetching: true,
                error: null
            }
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: null
            }
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                smurfs: [...state.smurf],
                isFetching: false,
                error: action.payload
            }
        case FETCHING_SMURF_POST:
            return {
                ...state,
                smurfs: [...state.smurf],
                isFetching: false,
                error: null
            }
        default:
            return {
                ...state
            }
    }
};