<template>
  <div
    class="lg:flex lg:justify-end"
    v-editable="blok"
  >
    <div class="bg-background relative shadow-card-member lg:w-11/12">
      <div class="w-full relative px-2.5 flex mt-10 min-h-36 card__header">
        <figure class="absolute left-0 -top-10 w-36 h-40 lg:w-80 lg:h-96 lg:-left-20 lg:-top-32" v-if="blok.image.filename">
          <img
            class="w-full h-full object-cover"
            :src="blok.image.filename"
            :alt="blok.image.alt" 
          />
        </figure>
        <div class="w-full flex-1 pt-3 pl-[9.25rem] card__body">
          <h2 class="text-18 lg:text-32 text-green pb-2.5">{{ blok.name }}</h2>
          <h3 class="break-words text-14 lg:text-20 sm:max-w-[22rem]">{{ blok.title }}</h3>
        </div>
      </div>
      <aside class="px-4 pt-4">
        <p class="pb-8">{{ blok.description }}</p>
        <q class="inline-block pb-8 text-16 lg:text-20 italic">{{ blok.quote }}</q>
      </aside>
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