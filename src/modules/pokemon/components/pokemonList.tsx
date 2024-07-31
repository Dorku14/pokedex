import { useEffect,useState } from "react";
import { pokemonApiList } from "../interfaces/PokemonApi";
import { pokeApiServices } from "../services/pokeApiService";

export const PokemonList = () => {
    const [lPokemon, setPokemonList] = useState<pokemonApiList[]>([]);
    const [limit, setLimit] = useState<number>(20);
    const [offset, setOffset] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    const changePage = (isNext:boolean) =>{
        try{
            if(page > -1){
                let newPage = 0;
            if(isNext)
                newPage =page + 1
                else
                newPage = page - 1
            if (newPage < 0) {
                throw new Error("La página no puede ser un número negativo o cero");
              }
           setPage(newPage);
            }
        }catch(ex){
            console.error(ex);
        }
        
    }

    useEffect(() =>{
        if (offset > -1 && limit > 0) {
            
              setOffset(offset + limit);
              
              // Incrementa la página global para la siguiente llamada
            
      
        pokeApiServices().getPokemon({limit:limit,offset:offset}).then(resp =>{
            if(resp)
            setPokemonList(resp.results)
        })
      }
    },[page]);


        return(
            <div>
                {page}
                {
                    lPokemon.map( (pokemon,index) =>{
                        return(
                            <div key={index}>
                                <label>Nombre: </label>
                                <label>{pokemon.name}</label>
                                    
                            </div>
                        )
                    }
                    )
                }
                <div className="mt-16">
                <p>mostrando de  archivos</p>
                <div className="space-x-2">
                    <button 
                    className="bg-blue-400 text-white rounded-md p-2 text-lg hover:bg-blue-500"
                     onClick={()=>{changePage(false)}}>
                        Anterior pagina</button>
                    <button className="bg-blue-400 text-white rounded-md p-2 text-lg hover:bg-blue-500"
                      onClick={()=>{changePage(true)}}>
                        Siguiente pagina</button>
                </div>
                </div>
            </div>
        );
    
}