import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    

    return(
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
                <option value=''/>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;