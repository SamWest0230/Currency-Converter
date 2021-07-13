import React from 'react';
import './App.scss';
import axios from 'axios'
import Starting from "./components/startingCurrency"
import End from "./components/endCurrency"
const url = 'http://api.exchangeratesapi.io/v1/';
const access_key = 'ffb50f324c1ac8ef64c0d035e489dc8c';


class App extends React.Component {

  state = {

    rates: [],
    fromCurrency: '',
    toCurrency: '',
    fromAmount: 0,
    toAmount: 0,
    rate: 0

  }

  handleChange = (e) => {
    console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  componentDidUpdate = (prevProps, prevState) => {
    const fromCurrency = this.state.fromCurrency;
    const prevFromCurrency = prevState.fromCurrency;
    const toCurrency = this.state.toCurrency;
    const prevToCurrency = prevState.toCurrency;
    const amount = this.state.fromAmount
    if (amount === 0){
      return;
    }
    console.log('here'+ toCurrency, fromCurrency)
    console.log(prevToCurrency, prevFromCurrency)
    if 
      (fromCurrency !== prevFromCurrency || toCurrency !== prevToCurrency ) {
        axios.get(url + 'convert' + '?access_key=' + access_key + '&from='+ fromCurrency + '&to='+ toCurrency + '&amount=' + amount)
        .then(response => {
          console.log(response)
          this.setState({
            rate: response.data.result

          })
        })
        .catch((err) => {
          console.log(err);
        })
      } 
  }
  componentDidMount = () => {
    axios.get(url + 'latest' + '?access_key=' + access_key)
      .then(response => {
        console.log(response)
        this.setState({
         rates: [...Object.keys(response.data.rates)]
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
console.log(this.state.fromCurrency)
    return (
      <div className="App">
        <h1>hello</h1>
        <Starting rates={this.state.rates} change={this.handleChange} />
        <h2>=</h2>
        <End rates={this.state.rates} change={this.handleChange} />
      </div>
    );
  }
}

export default App;
