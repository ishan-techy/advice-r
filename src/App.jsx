import React from "react";
import axios from 'axios'
import './App.css'
class App extends React.Component {
  state = { advice: '' }
  state2 = { id: '' }
  componentDidMount() {
    this.fetchAdvice()
  }
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        this.setState({ advice })
        const { id } = response.data.slip
        this.setState({ id })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const { advice } = this.state;
    const { id } = this.state;
    return (
      <div className="card">
        <h1 className="heading"><mark>#{id}</mark> {advice}</h1>
        <button className="button" onClick={this.fetchAdvice}></button>
      </div>
    )
  }
}
export default App