import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon'>
        <p>{ this.props.name }</p>
        <p>{ this.props.type }</p>
        <p>Average weight { this.props.weight } {this.props.unit }</p>
        <img src={ this.props.image }/>
      </div>
    );
  }
}

export default Pokemon;
