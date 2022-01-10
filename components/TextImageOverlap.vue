<template>
  <div
    v-editable="blok"
    class="pb-5 lg:pb-10"
  >
    <article class="container sm:w-3/4 lg:w-4/5 xl:w-11/12">
      <div
        v-for="item in blok.column"
        :key="item._uid"
        class="relative text-image-overlap__item lg:flex lg:even:justify-end lg:even:-top-80 xl:even:-top-96"
      >
        <div class="text-image-overlap__item-description rich-text-renderer lg:w-2/3 lg:absolute right-0 lg:bg-blue-background lg:py-16 lg:px-12 xl:py-20 xl:px-28 lg:max-w-[820px] z-10 2xl:max-w-none 2xl:w-3/4">
          <rich-text-renderer :document="item.description" />
        </div>
        <figure
          v-if="item.image.filename"
          class="mb-16 h-56 lg:max-w-[508px] lg:w-47% lg:h-[620px]"
        >
          <img
            class="w-full h-full object-cover"
            :src="item.image.filename"
            alt="item.image.alt"
          />
        </figure>
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