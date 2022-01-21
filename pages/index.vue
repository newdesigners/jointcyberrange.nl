<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
import { createSEOMeta } from '~/assets/js/utils/seo.js';

export default {
  data () {
    return {
      story: { content: {} },
    }
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();
 
      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content);
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      });
 
      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      });
    });
  },
  asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published';
    const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path;

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get(`cdn/stories/${ fullSlug }`, {
      version,
    }).then((res) => {
      return res.data;
    }).catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({ statusCode: 404, message: 'Failed to receive content form api' });
      } else {
        console.error(res.response.data);
        context.error({ statusCode: res.response.status, message: res.response.data });
      }
    });
  },
  head() {
    const url = this.story.full_slug;
    const seo = this.story.content.seo;
    
    if(seo) {
      const title = seo.title = seo.title ? seo.title : `Joint Cyber Range | ${ this.story.name }`;
      return {
        title,
        meta: createSEOMeta({
          url,
          seo,
        }),
      };
    }
  },
};
</script>
