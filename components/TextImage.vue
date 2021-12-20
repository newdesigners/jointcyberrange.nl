<template>
  <div
    v-editable="blok"
    class="pb-5 lg:pb-10 xl:pb-32"
  > 
    <article class="container lg:flex gap-14 justify-between">
      <div class="w-full lg:w-1/2 lg:flex-1">
        <h2 class="w-full pb-5">{{ blok.title }}</h2>
        <div class="rich-text-renderer">
          <rich-text-renderer  :document="blok.description" />
        </div>
      </div>
      <figure
        class="lg:w-1/2 xl:w-[565px]"
        v-if="blok.image.filename"
      > 
        <img
          class="w-full"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
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