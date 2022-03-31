import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <div>
        <p>Email</p>
        <input type="text" id="userEmail" name="email" maxlength="50" required />
        <label for="UserEmail"></label>
      </div>
    );
  }
}
export default Email;
