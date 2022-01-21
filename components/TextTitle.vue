<template>
  <div
    v-editable="blok"
  >
    <article
      class="mx-auto container pb-10 pt-0 relative"
      :class="{ 'pb-16 lg:pb-24' : blok.title === '', 'py-12 lg:py-24' : blok.page_intro, 'background__highlight' : blok.background_highlight_circle }"
    >
      <div class="sm:w-4/5 mx-auto max-w-[600px]">
        <h1
          v-if="blok.page_intro"
          class="text-24 lg:text-36 pb-5 lg:pb-9 text-center"  
        >
          {{ blok.title }}
        </h1>
        <h2 
          v-else-if="blok.title !== ''"
          class="text-24 lg:text-36 pb-5 lg:pb-9 text-center"
        >
          {{ blok.title }}
        </h2>
        <p :class="blok.description_text_alignment">{{ blok.description }}</p>
      </div>
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