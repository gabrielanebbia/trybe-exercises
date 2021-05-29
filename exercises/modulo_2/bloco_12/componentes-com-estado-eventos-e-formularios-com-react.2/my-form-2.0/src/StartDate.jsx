import React from 'react';

class StartDate extends React.Component {
  render() {
    return (  
      <div>
        <p>Data de início</p>
        <input type="text" id="userDataInicio" name="dataInicio" placeholder="dd-mm-aaaa" onkeyup="testDataInicial()" maxlength="8" required></input>
      </div>
    );
  }
}

export default StartDate;
