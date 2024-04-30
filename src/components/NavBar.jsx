
import { Link } from 'react-router-dom';
import '../assets/style/nav.css';



function NavBar() {

    return (
        
            <header>
                <nav>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem'}}> Home </Link>
                    <Link to='/contacto' style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}> Contacto </Link>
                </nav>

                <div>
                    <h1>Happy Cake 🎂🍰 </h1>
                </div>

            </header>

      

    );
}


export default NavBar;