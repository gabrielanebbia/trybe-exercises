import React from 'react';

class Name extends React.Component {
  render() {
    return (
      <div>
        <p>Nome</p>
        <input type='text' id="userResumo" name="name" maxlength="40" required />
      </div>
    );
  }
}
export default Name;
