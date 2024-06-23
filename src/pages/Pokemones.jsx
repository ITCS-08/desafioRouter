
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Pokemones() {

    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0';

    const [pokemonData, setPokemonData] = useState([]);
    const [name, setName] = useState([]);
    const navigate = useNavigate();

    const irAPersonajes = () => { navigate(`/personajes/${name}`); };


    useEffect(() => {
        const fetchPokemon = async () => {
            try {
              
                const response = await fetch(POKEMON_URL);
                const data = await response.json();
                // Establece pokemonData con los datos del Pokemon obtenidos
                setPokemonData(data.results);        
            } catch (error) {
                console.error("Error al cargar Pokémon:", error);
            }
        };

        fetchPokemon();
    }, []);

    const handleBackClick = () => {
        navigate('/');
    };

    return (

        <>
            <div className="container">

                <div className="container-fluid mt-5" >

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} >  PARA VER DETALLE DE POKEMON, SELECCIONA UNO.</h3>
                 
                    <select className="mt-3" style={{ width: '215px', height: '30px' }} onChange={(e) => setName(e.target.value)}>
                        <option value="">Selecciona un Pokemon</option>
                        {
                            pokemonData.map((pokemon, index) => (
                                <option key={index} value={pokemon.name}>{pokemon.name}</option>
                            ))
                        }
                    </select>

                </div>

                <Button className="mt-5 mb-5 " variant="success" type="submit" onClick={handleBackClick}  >
                    Volver a Inicio
                </Button>
                <span> </span>
                <Button className="mt-5 mb-5" variant="primary" type="submit" onClick={irAPersonajes}>
                    Ver Detalle Pokemon
                </Button>
            </div>
        </>
    );
}

export default Pokemones;