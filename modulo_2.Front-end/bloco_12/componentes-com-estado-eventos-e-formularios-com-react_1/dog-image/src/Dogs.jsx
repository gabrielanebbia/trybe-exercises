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
      </div>
    );
  }
}

export default Dogs;
