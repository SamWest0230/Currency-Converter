import React from 'react';
import './App.scss';
import axios from 'axios'
import Starting from "./components/startingCurrency"
import End from "./components/endCurrency"
const url = 'http://api.exchangeratesapi.io/v1/latest';
const access_key = 'ffb50f324c1ac8ef64c0d035e489dc8c';


class App extends React.Component {

  state = {

    rates: [],
    fromCurrency: '',
    toCurrency: '',
    fromAmount: 0,
    toAmount: 0

  }

  handleChange = (e) => {
    console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  componentDidUpdate = (prevState) => {
    const fromCurrency = this.state.fromCurrency;
    const prevCurrency = prevState.fromCurrency;
    if 
      (fromCurrency !== prevCurrency) {
      console.log('new');

      } 
  }
  componentDidMount = () => {
    axios.get(url + '?access_key=' + access_key)
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
