<template>
  <div v-editable="button">
    <!-- External link -->
    <a
      v-if="label && button.linktype === 'url'"
      :href="button.url"
      target="_blank"
      rel="noopener noreferrer"
      class="btn"
    >
      <span class="">{{ label }}</span>
    </a>

     <!-- Internal link -->
    <NuxtLink
      v-if="label && button.linktype === 'story'"
      :to="button.cached_url"
      class="btn"
    >
      <span class="">{{ label }}</span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    button: {
      type: Object,
      required: true,
      default() {
        return {
          linktype: '',
        };
      },
    },
  },
};
</script>