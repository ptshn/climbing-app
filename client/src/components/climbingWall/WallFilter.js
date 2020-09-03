import React from 'react';
import { connect } from 'react-redux';
import { setWallFilterBool } from '../../actions/actions';
import { FilterForm, Label, InputCheckbox } from './WallGrid.styled';

const WallFilter = props => {
    const handleChange = () => {
        props.setWallFilterBool(!props.isChecked)
    }
    
    return (
        <FilterForm>
            <Label>
                <InputCheckbox 
                    type='checkbox' 
                    name='isChecked'
                    onChange={handleChange}  
                    checked={props.isChecked}  
                />
                Fill View
            </Label>
        </FilterForm>
    )
}

const mapStateToProps = state => ({
    isChecked: state.setWallFilterBool
})

const mapDispatchToProps = {
    setWallFilterBool
}

export default connect(mapStateToProps, mapDispatchToProps)(WallFilter);