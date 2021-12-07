<template>
  <div 
    v-editable="blok"
  >
    <div class="container">
      <article class="pb-10">
        <ul class="flex flex-wrap gap-8">
          <li class="w-1/3" v-for="item in blok.items" :key="item._uid">
            <Resources class="w-full pb-2.5" :type="item.icon" />
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
}
</script>