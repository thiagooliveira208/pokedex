<template>
    <button class="flex flex-row bg-blue-600 rounded-md text-white p-2 absolute bottom-0 right-1/3">
        <slot />
    </button>
  </template>

  <script>
  export default {
    name: "ButtonPoke",

    props: {},

    data() {
      return {};
    },
  };
  </script>
