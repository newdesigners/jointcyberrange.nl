<template>
  <div 
    v-editable="blok"
  >
    <div class="container">
      <article class="py-10 lg:py-20 sm:w-3/4 mx-auto flex flex-col items-center">
        <h2 class="pb-5">{{ blok.title }}</h2>
        <div v-if="blok.description">
          <rich-text-renderer :document="blok.description" />
        </div>
        <Button class="mt-5 lg:mt-10" :label="blok.button_label" :button="blok.button_url" />
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