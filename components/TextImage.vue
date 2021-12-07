<template>
  <div v-editable="blok">
    <article>
      <div>
        <h2>{{ blok.title }}</h2>
        <rich-text-renderer :document="blok.description" />
      </div>
      <figure v-if="blok.image.filename">
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