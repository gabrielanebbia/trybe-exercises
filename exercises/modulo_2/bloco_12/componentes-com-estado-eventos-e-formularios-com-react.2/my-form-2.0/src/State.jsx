import React from 'react';

class State extends React.Component {
  render() {
    return (
      <div>
        <p>Estado</p>
        <select id="userEstado" name="estado" required></select>
        <label for="userEstado"></label>
      </div>
    );
  }
}
export default State;
