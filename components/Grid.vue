<template>
  <div 
    v-editable="blok"
  >
    <div class="container">
      <article class="py-10 lg:py-28 sm:w-3/4 mx-auto">
        <ul class="flex flex-wrap gap-8 justify-around sm:justify-between">
          <li class="max-w-grid-icon-text w-1/3 sm:w-1/4" v-for="item in blok.items" :key="item._uid">
            <Resources class="w-full pb-2.5 max-w-grid-icon-text-icon mx-auto" :type="item.icon" />
            <p class="text-white text-center break-words">{{ item.text }}</p>
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
};
</script>