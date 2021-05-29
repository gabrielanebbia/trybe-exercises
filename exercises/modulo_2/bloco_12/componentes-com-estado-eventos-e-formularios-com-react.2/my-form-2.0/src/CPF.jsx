import React from 'react';

class CPF extends React.Component {
  render() {
    return (
      <div>
        <p>CPF</p>
        <input type="text" id="userCpf" name="cpf" maxlength="11" required />
        <label for="userCpf"></label>
      </div>
    );
  }
}
export default CPF;
