<template>
  <div 
    v-editable="blok"
    class="pb-16 lg:pb-24"
  >
    <div class="container">
      <article
        class="sm:w-4/5 mx-auto text-center"
        :class="{ 'max-w-[600px]' : blok.container_width === 'small' }"
      >
        <h2
          class="pb-10 lg:pb-14"
          v-if="blok.title"
        >
          {{ blok.title }}
        </h2>
        <ul
          class="flex flex-wrap items-start justify-between"
          :class="{ 'gap-y-10 lg:gap-x-10': type === 'logo' }">
          <li 
            class="max-w-grid-icon-text w-32% sm:w-1/4 flex items-center justify-center"
            :class="{ 'w-5/12 sm:w-5/12 h-20 lg:w-1/5' : item.component === 'logo', 'lg:w-5/12 max-w-[300px]' : blok.size === 'large' }"
            v-for="item in blok.items" :key="item._uid"
          >
            <div class="w-full" v-if="item.component === 'icon_text'">
              <Resources
                class="w-full pb-2.5 lg:pb-10 max-w-grid-icon-text-icon lg:max-w-grid-icon-text-icon-lg mx-auto"
                :type="item.icon"
              />
              <p class="text-white text-center break-words xl:text-36">{{ item.text }}</p>
            </div>
            <figure 
              v-if="item.component === 'logo' && item.image.filename"
              class="w-11/12"
            >
              <a 
                v-if="item.link && (item.link.url !== '' || item.link.cached_url !== '')"
                :href="item.link.url"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  class="w-full h-full object-contain"
                  :class="{ 'opacity-50 hover:opacity-100' : blok.hover_highlight }"
                  :src="item.image.filename"
                  :alt="item.image.alt"
                />
            </a>
            <img
                v-else
                class="w-full h-full object-contain"
                :class="{ 'opacity-50 hover:opacity-100' : blok.hover_highlight }"
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
  data() {
    return {
      type: '',
    }
  },
  mounted() {
    if(this.blok.items.length > 0) this.type = this.blok.items[0].component;
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>