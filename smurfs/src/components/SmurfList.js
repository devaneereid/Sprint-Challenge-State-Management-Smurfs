import React, {useEffect, useState} from 'react';
import {getSmurf} from '../actions/index';
import SmurfData from './SmurfData';
import {connect} from 'react-redux';


export const SmurfList = props => {
    console.log(props.smurf)
    const [findSmurf] = useState(false)
        console.log(findSmurf)

    useEffect(() => {
        props.getSmurf();
        console.log(props);
    }, [findSmurf]);
    useEffect(() => {
        props.getSmurf();
    }, [findSmurf])
    if(!props.smurf) {
        return (
            <h4>Finding Smurfs...</h4>
        ) 
    } else {
        console.log(props.smurfs);

        return (
                <div>
                    {props.smurfs.map(smurf => (
                        <div>
                            <SmurfData key={smurf.id}
                                name= {smurf.name}
                                age={smurf.age}
                                height={smurf.height} >
                            </SmurfData>
                        </div>
                    ))}
                </div>
        )
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        ...state,
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

const mapDispatchToProps = {
    getSmurf
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(SmurfData);