import React from 'react';
import {connect} from 'react-redux';

export const SmurfData = props => {
    return (
        <>
            <div className='smurf-data'>
                <h1>Meet the Smurfs!</h1>
                    <h3>Name: {props.name}</h3>
                    <h3>Age: {props.age}</h3>
                    <h3>Height: {props.height}</h3>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps)(SmurfData);