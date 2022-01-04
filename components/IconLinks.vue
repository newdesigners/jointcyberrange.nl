<template>
  <div
    v-editable="blok"
    class="pb-5 lg:pb-10 xl:pb-24 relative background__highlight background__highlight"
  >
    <article class="container">
      <div class="sm:w-4/5 md:w-11/12 mx-auto max-w-[1028px]">
       <!-- <ul class="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between items-center gap-7"> -->
        <ul class="grid grid-flow-row sm:grid-cols-2-192px md:grid-cols-3-192px auto-rows-[192px] place-content-center sm:place-content-between gap-7">
          <li 
            v-for="link in blok.links"
            :key="link._uid"
            class="w-48 h-48 bg-blue"
          >
            <NuxtLink 
              v-if="link.link.linktype === 'story'"
              :to="link.link.cached_url"
            >
            </NuxtLink>
            <a
              v-else
              class="block"
              :href="link.link.url"
            ></a>
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