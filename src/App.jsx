
import {useState} from 'react';
import API from './services/API';

import {FiSearch} from 'react-icons/fi';
import './css/background.css';
import './css/app.css';
import './css/info.css';

function App() {

  const [input, setInput] =useState(''); 
  // 'Input' é o nome do estado, 'setInput' é a função que muda o valor deste estado
  const [cep, setCEP] = useState({});
  
  async function handleSearch(){

    if(input === ''){
      alert('Preencha algum CEP')
      return;
    }

    try{
      const response = await API.get(`${input}/json/`);
      setCEP(response.data);
      setInput('');
      //'get' é para pegar a inf

    }catch{
      alert('Ouve um erro ao buscar');
      setInput('');
      //Limpa o campo de pesquisa caso de erro
    }
  }


  return (
    <div className="background">
      <div className="app">
        <h1 className='title'>Buscador CEP</h1>

        <div className='appInput'>
          <input
            type='text'
            placeholder='Digite seu cep aqui!'
            value={input}
            // 'Input' é o valor
            onChange={(event) => setInput(event.target.value)}
            // Agora o 'input' tem acesso ao que foi digitado pelo 'setInput'
          />

          <button className='buttonSearch' onClick={handleSearch}>
            <FiSearch size={25} color='#fff'/>
          </button>
        </div>


        {Object.keys(cep).length > 0 && (
        //Se o objeto é maior que zero (length > 0) irá mostrar algo na tela (Object.keys)
          <main className='info'>
            <h2> <b>CEP:</b> {cep.cep} </h2>
            <span> <b>Rua:</b> {cep.logradouro} </span>
            {/* <span> Complemento: {cep.Complemento} </span> */}
            <span> <b>Bairro:</b> {cep.bairro} </span>
            <span> <b>Cidade:</b> {cep.localidade} </span>
            <span> <b>Estado:</b> {cep.uf} </span>
            <span> <b>DDD:</b> {cep.ddd} </span>
            <span> <b>IBGE:</b> {cep.ibge} </span>
          </main>
        )}
      </div>
    </div>
  );
  
}//function

export default App;
