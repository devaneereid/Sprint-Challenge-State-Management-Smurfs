import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSmurf} from '../actions/index';

const AddNewSmurf = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf, [e.target.name]: e.target.value })
    };

    const handleSubmit = () => {
        props.postSmurf(newSmurf);
    }

    const newSmurfs = e => {
        e.preventDefault();

    const smurf = newSmurfs
        props.postSmurf(smurf)
        setNewSmurf ({
            name: '',
            age: '',
            height: ''
        })
    };

    return (
        <form>
            <input
                name='name'
                // type='text'
                placeholder='Name'
                onChange={handleChanges} />
            <input
                name='age'
                // type='text'
                placeholder='Age'
                onChange={handleChanges} />
            <input
                name='height'
                // type='text'
                placeholder='Height'
                onChange={handleChanges} />
            <button
                type='submit'
                onClick={handleSubmit}>Add Smurf!</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
        smurfs: state.smurfs
    };
};
const mapDispatchToProps = {
    postSmurf
}

export default connect(
    mapStateToProps, mapDispatchToProps)(AddNewSmurf);