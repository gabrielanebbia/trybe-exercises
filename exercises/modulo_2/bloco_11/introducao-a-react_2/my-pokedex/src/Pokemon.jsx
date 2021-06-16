import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon'>
        <div className='pokemon-text'>
          <p>{ this.props.name }</p>
          <p>{ this.props.type }</p>
          <p>Average weight { this.props.weight } {this.props.unit }</p>
        </div>
        <div className='pokemon-img'>
          <img src={ this.props.image }/>
        </div>
      </div>
    );
  }
}

export default Pokemon;
