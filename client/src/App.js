import React from 'react';
import './App.scss';
import axios from 'axios'
import Starting from "./components/startingCurrency"
const url = 'http://api.exchangeratesapi.io/v1/latest';
const access_key = 'ffb50f324c1ac8ef64c0d035e489dc8c';


class App extends React.Component {

  state = {

    rates: []

  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = () => {
    axios.get(url + '?access_key=' + access_key)
      .then(response => {
        this.setState({
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
        <h1>hello</h1>
        <Starting rates={this.state.rates} />
        <h2>=</h2>
        <Starting rates={this.state.rates} />
      </div>
    );
  }
}

export default App;
