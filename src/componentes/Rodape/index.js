import './Rodape.css';

const Rodape = () =>{
    return(
        <footer className='rodape--footer'>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/fb.png'/>
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target='_blank'>
                        <img src='/imagens/tw.png'/>
                    </a>
                </li>
                <li>
                    <a href='instagram.com' target='_blank'>
                        <img src='/imagens/ig.png'/>
                    </a>
                </li>
            </ul>
            <section>
                <img className='img-logo' src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    );
}

export default Rodape;