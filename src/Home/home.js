import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import  { getDataFromPokemon } from '../peticiones/index';

const Home = () => {
    const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

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
            <Grid container spacing={3}>
                {pokemons.length > 0 && 
                pokemons.map((pokemon, index) => (
                    <Grid item md={4} lg={4} sm={12} xs={12}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia component='img' image={`${imgUrl}${index + 1}.svg`} />
                            <CardContent>
                                <h4>{pokemon.name}</h4>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Home;