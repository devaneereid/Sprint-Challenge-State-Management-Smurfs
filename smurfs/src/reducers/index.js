import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    FETCHING_SMURF_POST,
    FETCHING_SMURF_DONE
} from '../actions/index';

const initialState = {
    baseURL: 'http://localhost:3333/smurfs',
    smurfs: [],
    isLoading: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state, 
                smurfs: [],
                isLoading: true,
                error: null
            }
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        case FETCHING_SMURF_DONE:
            return {
                ...state,
                isLoading: false
            }
        case FETCHING_SMURF_FAILURE:
            return {
                ...state,
                smurfs: [],
                isFetching: false,
                error: action.payload
            }
        case FETCHING_SMURF_POST:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                error: null
            }
        default:
            return {
                ...state
            }
    }
};