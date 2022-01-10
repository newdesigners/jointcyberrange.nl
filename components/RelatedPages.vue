<template>
  <div 
    v-editable="blok"
    class="mb-5 lg:mb-10"
  >
    <div class="container md:flex gap-5">
      <article class="w-full">
        <h2 class="text-32 text-center pb-5 lg:pb-10">{{ blok.title }}</h2>
        <ul class="md:flex gap-5">
          <li
            v-for="p in blok.pages"
            :key="p._uid"
            class="h-48 lg:h-[345px] w-full md:w-1/2 flex mb-5 lg:mb-10"
          >
            <div
              v-if="p.content"
              class="w-full h-full bg-cover"
              :style="p.content.image.filename ? { background: `linear-gradient(0deg, rgba(1, 16, 44, .5), rgba(1, 16, 44, .5)),  url(${ transformImage(p.content.image.filename) })` } : ``"
            >
              <NuxtLink 
                class="flex h-full items-center justify-center"
                :to="p.full_slug"
              >
                <h3 class="text-center inline-block uppercase text-36">{{ p.name }}</h3>
              </NuxtLink>
            </div>
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
  methods: {
    transformImage(image, option = '720x0/smart/') {
      if (!image) return "";
      if (!option) return image;
      
      let service = '/m/';
      return image + service + option;
    },
  },
}
</script>