import React from 'react';

class Address extends React.Component {
  render() {
    return (
      <div>
        <p>Endereço</p>
        <input type="text" id="userEndereco" name="endereco" maxlength="200" required />
        <label for="userEndereco"></label>
      </div>
    );
  }
}
export default Address;
