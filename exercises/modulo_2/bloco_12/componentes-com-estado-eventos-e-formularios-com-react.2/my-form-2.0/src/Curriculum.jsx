import React from 'react';

class Curriculum extends React.Component {
  render() {
    return (
      <div>
        <p>Resumo do currículo</p>
        <textarea name="resumo" id="userResumo" maxlength="1000" cols="100" rows="20" required></textarea>
      </div>
    );
  }
}

export default Curriculum;
