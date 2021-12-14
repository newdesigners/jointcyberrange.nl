<template>
<<<<<<< HEAD
  <div>
    <article class="container xl:flex lg:flex">
=======
  <div v-editable="blok"> 
    <article class="container xl:flex l:flex">
>>>>>>> 2c7cfadd57deec73aebb8dab67a081e4e737b8dc
      <div class="w-9/12" >
        <h2 class="w-full pb-5">{{ blok.title }}</h2>
        <div class="rich-text-renderer">
<<<<<<< HEAD
        <rich-text-renderer class="mt-5 lg:w-1/2 sm:w-full" :document="blok.description" />
        </div>
      </div>
      <figure class="xl:w-1/2 lg:ml-10"  v-if="blok.image.filename"> 
=======
          <rich-text-renderer class="mt-5 lg:w-1/2" :document="blok.description" />
        </div>
      </div>
      <figure class="xl:w-1/2 ml-10" v-if="blok.image.filename"> 
>>>>>>> 2c7cfadd57deec73aebb8dab67a081e4e737b8dc
        <img :src="blok.image.filename" :alt="blok.image.alt">
      </figure>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>