import axios from 'axios';
export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';
export const FETCHING_SMURF_POST = 'FETCHING_SMURF_POST';

export const getSmurf = () => dispatch => {
    console.log('Fetching Smurf')
    dispatch({ type: FETCHING_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs/')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            // console.log('Error Found', err)
            dispatch({ type: FETCHING_SMURF_FAILURE, payload: err });
        });
};

export function postSmurf(smurf) {
    return dispatch => {
        dispatch({ type: FETCHING_SMURF_POST, payload: smurf })
            axios.post('http://localhost:3333/smurfs', smurf)
                .then(res => {
                    console.log(res)
                    dispatch({ type: FETCHING_SMURF_POST, payload: res.data })
                })
            }
            // .catch(err => {
            //     dispatch({ type: FETCHING_SMURF_FAILURE, payload: err.response })
            // }
    };
