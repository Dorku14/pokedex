import axios from "axios";
import {pokemonApi} from "../interfaces/PokemonApi";
import { PokemonApiParams } from "../interfaces/PokemonApiParams";
export const pokeApiServices = () =>{

    const getPokemon = async(params:PokemonApiParams) =>{
        try{
            const axiosResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${params.offset}&limit=${params.limit}`);
            const resp:pokemonApi = axiosResponse.data;
            return   resp;
        }catch(ex){
            console.error(ex);
            return null;
        }

    }

    const getPokemonDetails = async() =>{
        try{
            const axiosResponse = await axios.get("https://pokeapi.co/api/v2/pokemon");
            const resp:pokemonApi = axiosResponse.data;
            return   resp;
        }catch(ex){
            console.error(ex);
            return null;
        }

    }
   return({
    getPokemon
   }); 
} 