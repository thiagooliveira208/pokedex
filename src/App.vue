<template>
  <!-- <div
      class="pt-10 pb-10 bg-[right_-85px_top_-70px] bg-[length:180px_180px] bg-[url('./assets/images/pokeball.png')] bg-blend-soft-light bg-no-repeat"
  > -->
  <div>
  <header-poke />
      <router-view v-slot="{ Component }">
          <keep-alive>
              <component :is="Component"></component>
          </keep-alive>
      </router-view>
  </div>
</template>

<script>
import HeaderPoke from "./components/HeaderPoke.vue";

export default {
  name: "App",
  components: {
      HeaderPoke,
  },

  data() {
      return {};
  },

  beforeMount() {
      // listPokemon();
      // console.log($router);
  },

  methods: {
      // listPokemon() {
      //   axios.get(`https://pokeapi.co/api/v2/pokemon`).then((response) => {
      //     // const { data } = response;
      //     // this.fields = data;
      //     console.log(response);
      //   });
      // },
  },
};
</script>
