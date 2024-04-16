<template>
    <div
    class="-z-10 grid grid-rows-[25px_23px_23px] min-w-[130px] max-w-[145px] h-[100px] content-center justify-start text-left pl-2 rounded-[15px] bg-no-repeat bg-[right_0px_bottom_-8px] bg-[length:80px_80px] bg-[url('./assets/images/pokeball.png')] bg-blend-soft-light"
    :class="`poke-color-${types[0].type.name}`"
    >
        <div>
            <p class="font-bold text-[14px] text-white mb-[5px] ml-[4px] capitalize">
                {{ pokemonName }}
            </p>
        </div>

        <div
            v-for="(type, index) in types" :key="index"
            class="flex justify-self-start font-bold text-[10px] text-white rounded-[15px] bg-green-200/30 mt-[2px] mb-[2px] ml-[4px]"
        >
            <p class="ml-[10px] mr-[10px] mt-[2px] mb-[2px] capitalize">{{type.type.name}}</p>
        </div>

        <img :src="sprite" alt="" class="-z-20 absolute max-w-[60px] max-h-[60px] right-[5px] bottom-[0px]">
    </div>
</template>

<script>
export default {
    name: "ListPoke",

    props: {
        pokemonName: {
            type: String,
            default: ""
        },
        sprite: {
            type: String,
            default: ""
        },
        types: {
            type: Array,
        }
    },

    data() {
        return {};
    },

    mounted() {
        // console.log(this.types);
    }
};
</script>
