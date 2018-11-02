import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resultado from './components/Resultado';
import axios from 'axios';

class App extends Component {

  state = {
    monedas: [],
    cotizacion: {},
    monedaCotizada: ''
  }

  async componentDidMount() {
    this.getMonedas();
  }

  getMonedas = async () => {
    const url = `https://api.coinmarketcap.com/v2/ticker/`;

    await axios.get(url)
      .then(res => {
        this.setState({
          monedas: res.data.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  // Citizar una crypto en base a una moneda
  getValueCrypto = async (monedas) => {
    const {moneda, crypto} = monedas;

    const url = `https://api.coinmarketcap.com/v2/ticker/${crypto}/?convert=${moneda}`;

    await axios.get(url)
      .then(res => {
        this.setState({
          cotizacion: res.data.data,
          monedaCotizada: moneda
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo="Cotiza Ciptomonedas al Instante"
        />

        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Form
              monedas={this.state.monedas}
              getValueCrypto={this.getValueCrypto}
            />

            <Resultado
              cotizacion = {this.state.cotizacion}
              monedaCotizada = {this.state.monedaCotizada}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
