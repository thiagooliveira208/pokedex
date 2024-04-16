import Pokedex from "../classes/Pokedex";

export default {
    async updatePokemonList() {
        const pokedex = new Pokedex();
        const list = await pokedex.getList(this.getPokemonListOffset);

        this.pokemonList.push(...list);
    },
};
