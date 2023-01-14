import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import Rodape from './componentes/Rodape/index.js';
import Time from './componentes/Time/index.js';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278',
    },{
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82cffa',
    },{
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#a6d157',
    },{
      id: uuidv4(),
      nome: 'Devops',
      cor: '#e06b69',
    },{
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#db6ebf',
    },{
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#ffba05',
    },{
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }

  ])

  const inicial =[{
    id: uuidv4(),
    favorito: false,
    nome: 'guilherme',
    cargo: 'Desenvolvedor de sofware',
    imagem: 'https://github.com/mazarottoguilherme.png',
    time: times[3].nome

},{
  id: uuidv4(),
  favorito: false,
  nome: 'guilherme',
  cargo: 'Desenvolvedor de sofware',
  imagem: 'https://github.com/mazarottoguilherme.png',
  time: times[3].nome

},{
  id: uuidv4(),
  favorito: false,
  nome: 'guilherme',
  cargo: 'Desenvolvedor de sofware',
  imagem: 'https://github.com/mazarottoguilherme.png',
  time: times[3].nome

}]

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = (id) =>{
    setColaboradores(colaboradores.filter(colaboradorFiltrado => colaboradorFiltrado.id !== id))
  }

  const mudarCorDoTime = (cor, id)=>{
    setTimes(times.map(timeMapeado => {
      if(timeMapeado.id === id){
        timeMapeado.cor = cor;
      }
      return timeMapeado;
    }));
  }

  const cadastrarTime = (novoTime) =>{
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  const resolverFavorito = (id)=>{
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador;

    }))
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)}
        <Rodape/>
    </div>
  );
}

export default App;
