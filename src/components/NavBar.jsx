
// import { Link } from 'react-router-dom';
import '../assets/style/nav.css';
import { NavLink } from "react-router-dom";



function NavBar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

        <header>
            {/* <nav className="navbar">
                    <Link to='/' style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem'}}> Home </Link>
                    <Link to='/contacto' style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}> Contacto </Link>
                </nav>

                <div>
                    <h1>Happy Cake 🎂🍰  </h1>
                </div> */}

            <nav>
                <div>
                    <h4> 🧸</h4>
                </div>
                <NavLink className={setActiveClass} to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}>
                    Home
                </NavLink>
                <span style={{ margin: '0 5px' }}>-</span>
                <NavLink className={setActiveClass} to="/pokemones" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}>
                    Lista de Pokemon
                </NavLink>

                
                {/* <span style={{ margin: '0 5px' }}>-</span>
                <NavLink className={setActiveClass} to="/personajes" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}>
                    Personajes
                </NavLink> */}
                {/* <span style={{ margin: '0 5px' }}>-</span>
                <NavLink className={setActiveClass} to="/admin" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}> Administración </NavLink>
                <span style={{ margin: '0 5px' }}>-</span>
                <NavLink className={setActiveClass} to="/login" style={{ textDecoration: 'none', color: 'white', fontSize: '1.3rem' }}> Login </NavLink> */}

            </nav>

        </header>



    );
}


export default NavBar;