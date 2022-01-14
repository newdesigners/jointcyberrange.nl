<template>
  <div 
    v-editable="blok"
    class="bg-cover flex items-end h-72 lg:h-page-introduction-image mb-6 lg:mb-12 bg-primary"
    :class="{ 'bg-top' : blok.background_position === 'top', 'bg-center' : blok.background_position === 'center', 'bg-bottom' : blok.background_position === 'bottom' }"
    :style="page.image ? { background: `linear-gradient(0deg, rgba(1, 16, 44, .5), rgba(1, 16, 44, .5)),  url('${ imageUrl }')` } : ``"
  >
    <div class="container">
      <article class="hidden md:block py-14">
        <h1 class="text-white pb-2.5 uppercase">{{ blok.title }}</h1>
        <p class="text-white pb-5 lg:w-2/3 lg:pb-12 xl:w-1/2">{{ blok.description }}</p>
        <Button
          v-if="blok.button_url"
          :label="blok.button_label"
          :button="blok.button_url"
        />
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
    page: {
      type: Object,
    },
  },
  methods: {
    transformImage(image, option) {
      if (!image) return "";
      if (!option) return image;
      
      let service = '/m/';
      return image + service + option;
    },
  },
  computed: {
    imageUrl() {
      return this.transformImage(this.page.image.filename, '1440x0/smart/filters:quality(50)');
    },
  },
}
</script>