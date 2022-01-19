<template>
  <figure>
    <NuxtImg
      v-if="!dark"
      class="w-full h-auto"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      src="/logo/logo.png"
      alt="Logo of Joint Cyber Range"
    />
    <NuxtImg
      v-else
      class="w-full h-auto"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
      src="/logo/logo-dark.png"
      alt="Dark version logo of Joint Cyber Range"
    />
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
