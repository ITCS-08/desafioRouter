import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Card, Modal } from 'react-bootstrap';


export default function Personajes() {

    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const { name } = useParams();
    //name = name.toUpperCase();
    console.log("Valor ID =", name);
    isNaN(name) ? "Ninguno" : null;
    const [pokemonData, setPokemonData] = useState(null);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false); 

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(POKEMON_URL + name);
                const data = await response.json();
                // Establece pokemonData con los datos del Pokemon obtenidos
                setPokemonData(data);
            } catch (error) {
                console.error("Error al cargar Pokémon:", error);
            }
        };

        fetchPokemon();
    }, [name]);

    console.log("Valor de PokemonData =", pokemonData);

    if (!pokemonData) {
        return <div>Cargando...</div>;
    }

    const handleBackClick = () => {
        navigate('/pokemones');
    };

    const handleImageClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <>
            <div >
                <div className="mt-3">
                    <Card.Header >
                        <h2>Pokemon Seleccionado: {name}</h2>
                    </Card.Header>
                </div>
                <div className="mt-3 mb-3 d-flex justify-content-center ">

                    <Card className=" mt-3 w-50 ">

                        <Card.Img
                            variant="top"
                            src={pokemonData?.sprites?.front_default}
                            alt={`Imagen de ${pokemonData.name}`}
                            onClick={handleImageClick}
                            style={{ cursor: 'pointer', width: '50%', margin: 'auto' }}
                        />
                
                        <Card.Body>
                            <Card.Title>Características de : {pokemonData.name}</Card.Title>
                            <ul className=" d-flex justify-content-center ">
                            <Card.Text className="text-left">
                              
                                <strong>Altura:</strong> {pokemonData.height / 10} m<br />
                                <strong>Peso:</strong> {pokemonData.weight / 10} kg<br />
                                <strong>Base Experience:</strong> {pokemonData.base_experience}<br />
                                <strong>Abilities:</strong> {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}<br />                               
                                <strong>Tipo:</strong> {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}
                            </Card.Text>
                            </ul>

                        </Card.Body>
                    </Card>
                </div>

                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Body>
                        <div className="col-12 w-100">
                            <img
                                src={pokemonData?.sprites?.front_default}
                                style={{ width: '50%', margin: 'auto', display: 'block' }}
                            />
                            <div className="text-center">
                                <strong>Altura:</strong> {pokemonData.height / 10}m
                                <span></span> <span>/</span> <span></span>
                                <strong>Peso:</strong> {pokemonData.weight / 10} kg
                                <span></span> <span>/</span> <span></span>
                                <strong>Tipo:</strong> {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}
                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <Button className="mt-1" variant="success" type="submit" onClick={handleBackClick}  >
                Volver a Pokemones
            </Button>
        </>

    );
}