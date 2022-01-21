<template>
  <div 
    v-editable="blok"
    class="pb-16 lg:pb-24"
  >
    <div class="container">
      <article class="sm:w-3/4 mx-auto flex flex-col items-center">
        <h2
          class="pb-5 text-center"
          :class="{ 'pb-7 md:pb-14' : blok.description === '', 'font-futura-bold' : blok.title_font === 'futura' }"
        >
          {{ blok.title }}
        </h2>
        <div class="mb-5" v-if="blok.description">
          <rich-text-renderer :document="blok.description" />
        </div>
        <Button :label="blok.button_label" :button="blok.button_url" />
      </article>
    </div>
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