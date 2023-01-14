import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

const Time = (props) =>{
    return(
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: hexToRgba(props.cor, .6)}}>
                <input value={props.cor} onChange={e => props.mudarCor(e.target.value, props.id)} type='color' className='input-cor'/>
                <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map( (colaborador, indice) => {
                        return (
                        <Colaborador
                            key={indice}
                            colaborador={colaborador}
                            cor={props.cor}
                            aoDeletar={props.aoDeletar}
                            aoFavoritar={props.aoFavoritar}
                        />)
                    } )}
                </div>
            </section>
    );
}

export default Time;