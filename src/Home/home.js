import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import  { getDataFromPokemon } from '../peticiones/index';

const Home = () => {
    //! variable que guarda la lista de pokemones.
    const[pokemons, setPokemon] = useState([]);
    //? funcion que ejecuta la url.
    const fetchPokemonList = async()=> {
        const listPokemones = await getDataFromPokemon();
        console.log(listPokemones.results);
        setPokemon(listPokemones.results);
    };
    //* declaracion de useEffect.
    useEffect(() => { 
        fetchPokemonList();
        //! importante: poner el array vacio para que esta funcion no se ejecute por siempre.
        //! ya que la funcion que este dentro de useEffect se ejecutara de forma infinita.
    }, []);
    return(
        <Container>
            <h1>POKEDEX</h1>
        </Container>
    );
}

export default Home;