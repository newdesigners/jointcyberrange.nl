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
            class="h-48 lg:h-[345px] w-full md:w-1/2 flex justify-center items-center bg-cover"
            :style="p.content.image.filename ? { background: `linear-gradient(0deg, rgba(1, 16, 44, .5), rgba(1, 16, 44, .5)),  url(${ p.content.image.filename })` } : ``"
          >
            <NuxtLink 
              class="block"
              :to="p.full_slug"
            >
              <h3 class="text-center inline-block uppercase text-36">{{ p.name }}</h3>
            </NuxtLink>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      relatedPages: [],
    };
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
    page: {
      type: Object,
    },
  },
  async mounted () {
    this.relatedPages = this.fetchRelatedPages();
  },
  methods: {
    async fetchRelatedPages() {
      const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
      
      const res = await this.$storyapi.get('cdn/stories', {
        version,
        resolve_relations: 'related-pages.pages',
      });
      console.log(res.data.stories);
      return res.data.stories;
    },
  }
}
</script>