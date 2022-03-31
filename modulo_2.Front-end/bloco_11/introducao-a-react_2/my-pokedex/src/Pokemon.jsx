import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon'>
        <div>
          <p>{ this.props.name }</p>
          <p>{ this.props.type }</p>
          <p>Average weight { this.props.weight } {this.props.unit }</p>
        </div>
        <div>
          <img src={ this.props.image } alt={ this.props.name }/>
        </div>
      </div>
    );
  }
}

export default Pokemon;
