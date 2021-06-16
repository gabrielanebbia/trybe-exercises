import React from 'react';

class HousingType extends React.Component {
  render() {
    return (
      <div>
        <p>Tipo de moradia</p>
        <label for="userTipo"required></label>
        <input type="radio" id="userTipoCasa" name="tipo" value="casa" />Casa
        <input type="radio" id="userTipoApartamento" name="tipo" value="apartamento" />Apartamento
      </div>
    );
  }
}
export default HousingType;
