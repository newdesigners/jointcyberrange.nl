<template>
  <div
    v-editable="blok"
    class="pb-16 lg:pb-24 relative"
  > 
    <article 
      class="container lg:flex gap-24 justify-between relative"
      :class="{
        'lg:flex-row-reverse' : blok.reverse || reverse,
        'background__highlight background__highlight--top' : blok.background_highlight_circle,
        'background__highlight background__highlight--left background__highlight--top' : ( blok.reverse || reverse ) && blok.background_highlight_circle 
      }"
    >
      <div class="w-full lg:w-1/2 lg:flex-1 lg:flex items-center">
        <div>
          <h2 class="w-full pb-5">{{ blok.title }}</h2>
          <div class="rich-text-renderer text-left">
            <rich-text-renderer :document="blok.description" />
          </div>
        </div>
      </div>
      <figure
        class="lg:w-1/2 xl:w-[565px] xl:min-h-[450px]"
        v-if="blok.image.filename"
      > 
        <NuxtImg
          class="w-full h-full object-cover"
          width="565"
          height="450"
          quality="70"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
          :modifiers="{ smart: true }"
          provider="storyblok"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
      </figure>
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
    reverse: {
      type: Boolean,
      default: false,
    }
  },
};
</script>