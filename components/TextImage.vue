<template>
  <div>
    <article class="container xl:flex lg:flex">
      <div class="w-9/12" >
        <h2 class="w-full pb-5">{{blok.title}}</h2>
        <div class="rich-text-renderer">
        <rich-text-renderer class="mt-5 lg:w-1/2 sm:w-full" :document="blok.description" />
        </div>
      </div>
      <figure class="xl:w-1/2 lg:ml-10"  v-if="blok.image.filename"> 
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
}
</script>