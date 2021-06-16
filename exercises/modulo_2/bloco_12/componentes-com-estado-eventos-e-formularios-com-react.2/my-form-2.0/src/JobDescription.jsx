import React from 'react';

class JobDescription extends React.Component {
  render() {
    return (  
      <div>
        <p>Descrição do cargo</p>
        <input type="text" id="userDescricao" name="descricao" maxlength="500" required></input>
      </div>
    );
  }
}

export default JobDescription;
