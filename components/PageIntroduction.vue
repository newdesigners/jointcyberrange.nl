<template>
  <div 
    v-editable="blok"
    class="bg-cover flex items-end h-72 lg:h-page-introduction-image mb-10"
    :style="blok.background_image ? { background: `linear-gradient(0deg, rgba(1, 16, 44, .5), rgba(1, 16, 44, .5)),  url(${ blok.background_image.filename })` } : ``"
  >
    <div class="container">
      <article class="hidden md:block py-10">
        <h1 class="text-white pb-2.5">{{ blok.title }}</h1>
        <p class="text-white pb-5 lg:w-2/3 lg:pb-12 xl:w-1/2">{{ blok.description }}</p>
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
}
</script>