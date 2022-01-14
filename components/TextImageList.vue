<template>
  <div
    v-editable="blok"
    class="pb-5 lg:pb-10"
  >
    <article 
      class="container sm:w-3/4 md:w-11/12 relative"
      :class="{ 'background__highlight background__highlight--left' : blok.background_highlight_circle }"
    >
      <h2 class="pb-10 lg:pb-16 text-center">{{ blok.title }}</h2>
      <ul>
        <li
          v-for="item in blok.column"
          :key="item._uid"
          class="flex flex-col text-center md:flex-row md:text-left md:gap-x-6 pb-10 lg:gap-x-12 lg:pb-20"
        >
          <figure
            v-if="item.image.filename"
            class="w-52 h-52 mb-5 md:mb-0"
          >
            <!-- <img 
              class="w-full h-full object-cover"
              :src="item.image.filename"
              alt="item.image.alt"
            /> -->
            <NuxtImg
              class="w-full h-full object-cover"
              width="600"
              height="600"
              quality="70"
              sizes="xs:100vw sm:100vw"
              :modifiers="{ smart: true }"
              provider="storyblok"
              :src="item.image.filename"
              :alt="item.image.alt"
            />
          </figure>
          <div class="flex-1">
            <h3 class="font-futura-bold lg:text-24 pb-6">{{ item.title }}</h3>
            <p class="max-w-[650px]">{{ item.description }}</p>
          </div>
        </li>
      </ul>
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