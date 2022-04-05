import './App.css';
import {React} from 'react';
import HelloWorld from './components/HelloWorld.jsx';
import Pessoa from './components/Pessoa.jsx';


function App() {

  const nome2 = "Elifas Brabo";

  const idade = 21;

  const profissao = "Scrum master AVA WorldPress"

  const nome = "Marcos Trouxa";

  let num1 = 5;

  let num2 = 3;

  const url = "https://i.pinimg.com/originals/03/53/dc/0353dc2ac4ab11998506e27066c6ba51.jpg";

  function sum(a,b) { return a+b }


  return (
    <div className="App">
      <h1>Olá {nome}</h1>
      <img src={url} className='App-logo' alt='Teste'/>
      <p>A soma entre {num1} e {num2} é: {sum(num1,num2)}</p>
      <HelloWorld/>
      <Pessoa nome={nome2} idade={idade} profissao={profissao}/>
    </div>
  );
}

export default App;
