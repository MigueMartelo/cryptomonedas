import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionSelect from './OptionSelect';

class Form extends Component {

    monedaRef = React.createRef();
    criptoRef = React.createRef();

    cotizarMonedas = e => {
        e.preventDefault();
        
        // Crear objeto
        const cotizacion = {
            moneda: this.monedaRef.current.value,
            crypto: this.criptoRef.current.value
        }

        // enviar por props
        this.props.getValueCrypto(cotizacion);
    }

    render() {
        return (
            <form onSubmit={this.cotizarMonedas}>
                <div className="form-group">
                  <label htmlFor="moneda">Moneda:</label>
                  <select ref={this.monedaRef} name="moneda" className="form-control">
                    <option value="" disabled defaultValue>Elige tu opción</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euros</option>
                  </select>
                </div>

                <div className="form-group">
                    <label htmlFor="ciptomoneda">Criptomoneda</label>
                    <select ref={this.criptoRef} name="criptomoneda" className="form-control">
                        {Object.keys( this.props.monedas ).map(key => (
                            <OptionSelect
                                key = {key}
                                moneda={this.props.monedas[key]}
                            />
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar" />
                </div>
            </form>
        );
    }
}

Form.propTypes = {    
    getValueCrypto: PropTypes.func.isRequired    
};

export default Form;