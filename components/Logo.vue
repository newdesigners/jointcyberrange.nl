<template>
  <figure class="w-full">
    <img class="w-full h-auto" v-if="!dark" src="~/assets/images/logo/logo.png" alt="Logo of JointCyberRange" />
    <img class="w-full h-auto" v-else src="~/assets/images/logo/logo-dark.png" alt="Dark version logo of JointCyberRange" />
  </figure>
</template>
<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
