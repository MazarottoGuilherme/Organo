import './Campo.css'

const Campo = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    return (
        <div className={`campo campo-${props.type}`}>
            <label>
                {props.label}
            </label>
            <input
                type={props.type}
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo