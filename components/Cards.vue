<template>
  <div
    v-editable="blok"
    class="pb-5 lg:pb-10"
  >
    <article class="container">
      <h2 class="text-24 lg:text-32 font-futura-bold pb-10 lg:pb-20 text-center">{{ blok.title }}</h2>
      <aside class="mx-auto sm:w-4/5 md:w-11/12">
        <ul class="md:flex gap-x-16 xl:justify-between">
          <li
            v-for="card in blok.cards"
            :key="card._uid"
            class="xl:w-5/12"
          >
            <figure
              v-if="card.image.filename"
              class="mb-4 lg:mb-8 w-full relative after:block after:pb-[56.25%] xl:after:pb-[75%]"
            >
              <!-- <img
                class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                :src="card.image.filename"
                :alt="card.image.alt"
              /> -->
              <NuxtImg
                class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                width="440"
                height="355"
                sizes="xs:100vw sm:100vw md:100vw lg:100vw"
                :modifiers="{ smart: true }"
                provider="storyblok"
                :src="card.image.filename"
                :alt="card.image.alt"
              />
            </figure>
            <h3 class="text-20 lg:text-24 font-futura-bold text-green text-24 pb-6 lg:pb-12 text-center">{{ card.title }}</h3>
            <div class="pb-5 lg:pb-10">
              <rich-text-renderer  :document="card.description" />
            </div>
            <aside class="flex justify-center md:justify-end pb-8 lg:pb-16">
              <Button
                :button="card.button_url"
                :label="card.button_label"
              />
            </aside>
          </li>
        </ul>
      </aside>
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