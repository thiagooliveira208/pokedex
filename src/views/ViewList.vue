<template>
    <!-- <p class="flex font-bold text-[20px] mt-5 mb-5">Pokedex</p> -->

    <div class="flex flex-wrap justify-between max-w-max">
        <list-poke v-for="pokemon in listPokemon" :key="pokemon.id" class="basis-1/12 m-1" :pokemonName="pokemon.name" :sprite="pokemon.sprite" :types="pokemon.types" />
    </div>

    <!-- <button @click="$router.push('/detail/123')">Details</button> -->
    <button-poke>Carregar mais</button-poke>
</template>

<script>
import ListPoke from "../components/ListPoke.vue";
import ButtonPoke from "../components/ButtonPoke.vue";
import { useStore } from "../store";

const store = useStore();

export default {
    name: "ViewList",
    components: {
        ListPoke,
        ButtonPoke,
    },

    data() {
        return {
            listPokemon: [],
        };
    },

    async beforeMount() {
        this.listPokemon = store.getPokemonList;
        console.log(this.listPokemon);
    },
};
</script>
