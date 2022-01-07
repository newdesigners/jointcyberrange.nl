<template>
  <div
    v-editable="blok"
    class="pb-10 lg:pb-20 xl:pb-24 relative"
  >
    <article class="container relative background__highlight">
      <div class="sm:w-4/5 mx-auto max-w-[670px]">
        Markup and styling here
        <!-- To do: Markup and styling form -->
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