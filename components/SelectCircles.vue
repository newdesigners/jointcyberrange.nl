<template>
  <div
    v-editable="blok"
    class="pb-10 lg:pb-20 xl:pb-24 relative"
  >
    <article class="container relative background__highlight">
      <div class="sm:w-4/5 mx-auto max-w-[900px]">
        <h3 class="font-futura-bold text-center pb-10 lg:pb-20">{{ blok.title }}</h3>
        <ul class="flex justify-between">
          <li
            v-for="selector in blok.selectors"
            :key="selector._uid"
          >
            <div class="mx-auto w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72 bg-background rounded-full flex items-center shadow-card-member justify-center">
              <h2 class="text-18 md:text-24 lg:text-36 text-center">{{ selector.title }}</h2>
            </div>
          </li>
        </ul>
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