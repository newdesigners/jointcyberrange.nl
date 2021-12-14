<template>
  <div
    class="relative background__highlight"
    v-editable="blok"
  >
    <article class="mx-auto container py-10 text-center sm:w-4/5">
      <h2 class="text-24 lg:text-36 pb-5 lg:pb-9">{{ blok.title }}</h2>
      <p class="text-left">{{ blok.description }}</p>
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