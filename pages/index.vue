<template>
  <section>
    <!-- <div class="container">
      <h1 class="pb-8">Heading 1</h1>
      <h2 class="pb-8">Heading 2</h2>
      <h3 class="pb-8">Heading 3</h3>
      <h4 class="pb-8">Heading 4</h4>
      <p>Body</p>
      <p class="pb-8">The Joint Cyber Range is an education platform for cybersecurity. Offensive and defensive cybersecurity is practiced in a secure environment. It engages students though gamification. Every assignment earns points, which makes learning fun and a bit competitive. Teachers can select predefined classes, including learning materials, or develop their own exercises. Exercises can take many forms, including Capture the Flag (CTF).</p>
      <p>Body italic</p>
      <p class="font-futura italic pb-8">The Joint Cyber Range is an education platform for cybersecurity. Offensive and defensive cybersecurity is practiced in a secure environment. It engages students though gamification. Every assignment earns points, which makes learning fun and a bit competitive. Teachers can select predefined classes, including learning materials, or develop their own exercises. Exercises can take many forms, including Capture the Flag (CTF).</p>
      <p>Body Heavy</p>
      <p class="font-futura-heavy pb-8">The Joint Cyber Range is an education platform for cybersecurity. Offensive and defensive cybersecurity is practiced in a secure environment. It engages students though gamification. Every assignment earns points, which makes learning fun and a bit competitive. Teachers can select predefined classes, including learning materials, or develop their own exercises. Exercises can take many forms, including Capture the Flag (CTF).</p>
      <p>Body Bold</p>
      <p class="font-futura-bold pb-8">The Joint Cyber Range is an education platform for cybersecurity. Offensive and defensive cybersecurity is practiced in a secure environment. It engages students though gamification. Every assignment earns points, which makes learning fun and a bit competitive. Teachers can select predefined classes, including learning materials, or develop their own exercises. Exercises can take many forms, including Capture the Flag (CTF).</p>
    </div> -->
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
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
};
</script>
