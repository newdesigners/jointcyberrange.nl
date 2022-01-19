<template>
  <div
    v-editable="blok"
    class="pb-5 lg:pb-10"
  >
    <article class="container">
      <div class="text-center">
        <h2 class="font-futura-bold text-24 pb-7 lg:pb-10">{{ blok.title }}</h2>
        <p class="font-futura-bold text-24 pb-8 lg:pb-10">{{ blok.inline_text }}</p>
        <aside class="flex justify-center pb-8 lg:pb-16 items-center gap-x-6">
          <p
            class="font-futura-bold text-18 lg:text-24 toggle-label"
            :class="{ 'toggle-label--active' : !isChecked }"
          >
            {{ blok.option_left }}
          </p>
          <label
            for="toggle-type"
            class="flex items-center cursor-pointer relative"
            @click.prevent="toggle"
          >
            <input type="checkbox" id="toggle-type" class="sr-only" v-model="isChecked">
            <div class="toggle-bg bg-secondary border-2 border-secondary h-7 w-[4rem] rounded-full relative"></div>
          </label>
          <p 
            class="font-futura-bold text-18 lg:text-24 toggle-label"
            :class="{ 'toggle-label--active opacity-100' : isChecked }"
          >
            {{ blok.option_right }}
          </p>
        </aside>
        <div v-for="(c, i) in selectedTextImages" :key="c._uid">
          <article v-for="single in c.content" :key="single._uid">
            <TextImage :blok="single" :reverse="i % 2 !== 0" />
          </article>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    }
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selected() {
      return this.isChecked ? this.blok.option_right.toLowerCase() : this.blok.option_left.toLowerCase();
    },
    selectedTextImages() {
      return this.blok.content.filter(c => c.content_for === this.selected);
    }
  },
  methods: {
    toggle() {
      console.log('tt');
      this.isChecked = !this.isChecked;
    },
  },
};
</script>