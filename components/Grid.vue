<template>
  <div 
    v-editable="blok"
  >
    <div class="container">
      <article class="py-10 lg:py-28 sm:w-3/4 mx-auto text-center">
        <h2 class="pb-5 lg:pb-10" v-if="blok.title !== ''">{{ blok.title }}</h2>
        <ul class="flex flex-wrap gap-8 justify-around sm:justify-between">
          <li class="max-w-grid-icon-text w-1/2 sm:w-1/4" v-for="item in blok.items" :key="item._uid">
            <div v-if="item.component === 'icon_text'">
              <Resources class="w-full pb-2.5 max-w-grid-icon-text-icon mx-auto" :type="item.icon" />
              <p class="text-white text-center break-words">{{ item.text }}</p>
            </div>
            <figure v-if="item.component === 'logo' && item.image.filename">
              <img 
                :src="item.image.filename"
                :alt="item.image.alt"
              />
            </figure>
          </li>
        </ul>
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