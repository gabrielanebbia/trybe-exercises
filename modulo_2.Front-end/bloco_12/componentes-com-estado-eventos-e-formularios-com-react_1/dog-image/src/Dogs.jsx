import React, { Component } from 'react';
import Loading from './Loading';

class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(_prevProps, _prevState) {
    localStorage.setItem("URL", this.state.data.message);

    const breed = this.state.data.message.split("/")[4];
    alert(breed);
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

  render() {
    if (this.state.data === "") return <Loading />
    return (
      <div>
        <img src={this.state.data.message} alt="Cachorro aleatório" />
        <button onClick={this.fetchDog}>Novo cachorrinho!</button>
      </div>
    );
  }
}

export default Dogs;
