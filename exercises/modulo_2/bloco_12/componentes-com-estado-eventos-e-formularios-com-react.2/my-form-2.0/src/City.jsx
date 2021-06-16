import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div>
        <p>Cidade</p>
        <input type="text" id="userCidade" name="cidade" maxlength="28" required />
        <label for="userCidade"></label>
      </div>
    );
  }
}
export default City;
