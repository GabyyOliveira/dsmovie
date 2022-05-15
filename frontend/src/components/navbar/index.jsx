// importando uma imagem no react para aprveitarmos ela em um component
import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
    return(
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/GabyyOliveira">
                        <div className='dsmovie-contact-container'>
                            {/* imagem que importamos acima (ela basicamente se torna uma tag) */}
                            <GithubIcon /> 
                            <p className='dsmovie-contact-link'>/GabyyOliveira</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;