// ! es una buena practica poner una URL dentro de una constante.
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=200';

//? esta funcion obtine datos del api.
 export const getDataFromPokemon = async (url = BASE_URL) => {
    try{
        // * se ejecuta el fetch para poder traer la informacion.
        const response = await fetch(url);
        // * convierte response a un objeto json para poder usarlo.
        const data = await response.json();
        // * retorna una varible que tomara el valor de todos los objetos del json.
        return data;
    } catch(error){
        console.log(error.message);
    }
}