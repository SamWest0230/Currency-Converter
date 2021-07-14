import React from 'react';
import './App.scss';
import axios from 'axios'
import Starting from "./components/startingCurrency"
const url = process.env.REACT_APP_URL
const access_key = process.env.REACT_APP_ACCESS_KEY

class App extends React.Component {

  state = {

    rates: [],
    fromCurrency: null,
    toCurrency: null,
    fromAmount: 0,
    toAmount: 0,
    rate: 0

  }

  handleChange = (e) => {
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
    if 
      (fromCurrency !== prevFromCurrency || toCurrency !== prevToCurrency ) {
        axios.get( url + 'convert' + '?access_key=' + access_key + '&from='+ fromCurrency + '&to='+ toCurrency + '&amount=' + amount)
        .then(response => {
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
        this.setState({
          fromCurrency: '',
          toCurrency: '',
         rates: [...Object.keys(response.data.rates)]
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='App__title'>Currency Converter</h1>
        <Starting rates={this.state.rates} change={this.handleChange} result={this.state.rate} />
      </div>
    );
  }
}

export default App;
