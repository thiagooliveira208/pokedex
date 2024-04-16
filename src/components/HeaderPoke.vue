<template>
  <p class="flex font-bold text-[40px] mt-5 mb-5">Pokedex</p>
  <p>Use the advanced search to find Pokemon by type, weakness, ability and more!</p>

  <input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search a Pokemon" type="text" name="search"/>
  <!-- <div class="flex flex-row justify-between">
    <div class="back">
      <font-awesome-icon
        v-if="$route.name == 'Home'"
        icon="fa-solid fa-arrow-left"
      />
    </div>

    <div class="icon-right">
      <font-awesome-icon v-if="$route.name == 'Home'" icon="fa-solid fa-list" />
      <font-awesome-icon
        v-if="$route.name != 'Home'"
        icon="fa-regular fa-heart"
      />
    </div>
  </div> -->
</template>

<script>
export default {
  name: "HeaderPoke",

  props: {},

  data() {
    return {};
  },
};
</script>
