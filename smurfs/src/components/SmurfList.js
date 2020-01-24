import React, {useEffect, useState} from 'react';
import {getSmurf} from '../actions/index';
import SmurfData from './SmurfData';
import {connect} from 'react-redux';


const SmurfList = props => {
    console.log('SmurfList')
    // console.log(props.smurf)
    // const [findSmurf] = useState(false)
    //     console.log(findSmurf)

    useEffect(() => {
        console.log('getSmurf');
        props.getSmurf();
    }, []);
    // useEffect(() => {
    //     props.getSmurf();
    // }, [findSmurf])

    return (
        <>{
            !props.smurfs ? (
                <h4>Finding Smurfs...</h4>
            ) : (
                <div>{
                    props.smurfs.map(
                        smurf => (
                            <div>
                                <SmurfData key={smurf.id}
                                    name= {smurf.name}
                                    age={smurf.age}
                                    height={smurf.height} >
                                </SmurfData>
                            </div> 
                        )
                    )
                }
                </div>
            )
        }  
        </>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        ...state,
        smurfs: state.smurfs,
        error: state.error
    };
};

const mapDispatchToProps = {
    getSmurf
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(SmurfList);