import React from 'react';

class PreviousPosition extends React.Component {
  render() {
    return (  
      <div>
        <p>Cargo</p>
        <input type="text" id="userCargo" name="cargo" maxlength="40" required></input>
      </div>
    );
  }
}

export default PreviousPosition;
