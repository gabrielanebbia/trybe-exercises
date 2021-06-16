import React from 'react';
import './App.css';
import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Address from './Address';
import City from './City';
import State from './State';
import HousingType from './HousingType';
import Curriculum from './Curriculum';
import PreviousPosition from './PreviousPosition';
import JobDescription from './JobDescription';
import StatDate from './StartDate';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Formulário em React</h1>
        <form>
          <fieldset className='currentInfo'>
            <legend>Cadastro de Currículo</legend>
            <Name />
            <Email />
            <CPF />
            <Address />
            <City />
            <State />
            <HousingType />
          </fieldset>
          <fieldset className='previousInfo'>
            <legend>Dados do seu último emprego</legend>
            <Curriculum />
            <PreviousPosition />
            <JobDescription />
            <StatDate />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
