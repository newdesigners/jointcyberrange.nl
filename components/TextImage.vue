<template>
  <div v-editable="blok"> 
    <article class="container lg:flex">
      <div class="w-full">
        <h2 class="w-full pb-5">{{ blok.title }}</h2>
        <div class="rich-text-renderer">
          <rich-text-renderer  :document="blok.description" />
        </div>
      </div>
      <figure class="xl:w-1/2 lg:ml-10" v-if="blok.image.filename"> 
        <img class="w-full" :src="blok.image.filename" :alt="blok.image.alt">
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