
import { useState } from "react";
import pokemonTitulo from '../assets/img/pokemonTitulo.png';
import pokemonImagenInicio from '../assets/img/pokemonInicio.png';


function Home() {

    return (

        <>
            <div className="container-fluid mt-5">
                <div className="mb-4" style={{ msFlexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                    <h1 className="mb-3" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Bienvenidos a Maestro Pokemon</h1>

                    <div className="mt-5">

                        <img src={pokemonTitulo} alt="Título de Pokémon" />

                    </div>

                    <div className="mt-4">

                        <img src={pokemonImagenInicio} alt="Título de Pokémon" />

                    </div>

                </div>

            </div>

        </>
    );
}

export default Home;

