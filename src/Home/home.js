import { useState } from "react";
import { Container } from "@mui/material";
import  { getDataFromPokemon } from '../peticiones/index';

const Home = () => {
    //! variable que guarda la lista de pokemones.
    const[pokemons, setPokemos] = useState([]);
    
    return(
        <Container>
            <h1>POKEDEX</h1>
        </Container>
    );
}

export default Home;