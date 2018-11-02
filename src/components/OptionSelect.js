import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionSelect extends Component {
    render() {
        const {id, name} = this.props.moneda;

        return (
            <option value={id}>
                {name}
            </option>
        );
    }
}

OptionSelect.propTypes = {
    moneda: PropTypes.object.isRequired,
};

export default OptionSelect;