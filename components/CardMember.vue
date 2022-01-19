<template>
  <div
    class="lg:flex lg:justify-center card"
    v-editable="blok"
  >
    <div class="bg-background relative shadow-card-member lg:w-11/12">
      <div class="w-full relative px-2.5 lg:px-10 pl-40 lg:pl-80 flex mt-10 min-h-36 card__header">
        <figure
          class="absolute left-0 -top-10 w-36 h-40 lg:w-[312px] lg:h-[352px] lg:-left-10 lg:-top-32"
          v-if="blok.image.filename"
        >
          <NuxtImg
            class="w-full h-full object-cover"
            width="936"
            height="1056"
            quality="70"
            sizes="xs:100vw sm:100vw md:100vw"
            :modifiers="{ smart: true }"
            provider="storyblok"
            :src="blok.image.filename"
            :alt="blok.image.alt"
          />
        </figure>
        <div class="w-full flex-1 pt-3 card__body">
          <h2 class="text-18 lg:text-32 text-green pb-2.5">{{ blok.name }}</h2>
          <h3 class="break-words text-14 lg:text-16 sm:max-w-[22rem] lg:max-w-none">{{ blok.title }}</h3>
        </div>
      </div>
      <aside class="px-4 pt-8 lg:px-10 lg:pl-80 sm:pt-12 lg:pt-8">
        <article class="">
          <p class="pb-8">{{ blok.description }}</p>
          <q class="inline-block pb-8 text-16 lg:pb-10 lg:text-20 italic">{{ blok.quote }}</q>
        </article>
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