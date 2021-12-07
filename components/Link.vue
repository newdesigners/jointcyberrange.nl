<template>
  <div v-editable="link">
    <!-- External link -->
    <a
      v-if="link && label && link.linktype === 'url'"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <span>{{ label }}</span>
    </a>

     <!-- Internal link -->
    <NuxtLink
      v-if="label && link.linktype === 'story'"
      :to="link.cached_url"
      class="link"
    >
      <span>{{ label }}</span>
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
    link: {
      type: Object,
      default() {
        return {
          linktype: '',
        };
      },
    },
  },
};
</script>