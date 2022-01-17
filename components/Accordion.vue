<template>
  <div
    v-editable="blok"
    class="pb-5 lg:pb-10 xl:pb-24 relative"
  >
    <article class="container">
      <div class="sm:w-4/5 mx-auto max-w-[900px]">
        <ul>
          <li
            v-for="(question, index) in blok.list"
            :key="question._uid"
            class="overflow-hidden border-b-2 mb-2.5 lg:mb-5 hover:cursor-pointer"
            :class="{ 'accordion--active' : index === selected }"
            @click="onClick(index)"
          >
          <div
            class="flex gap-x-5 items-center justify-between pb-2.5 lg:pb-5 lg:w-11/12 lg:pl-8"
          >
            <h4
              class="font-futura-bold text-20 leading-normal flex-1"
              :class="{ 'text-green' : index === selected }"
            >
              {{ question.question }}
            </h4>
            <Resources
              type="chevron-down"
              class="w-9 h-9 transition-all duration-300 ease-out"
              :class="{ 'rotate-180' : index === selected }"
            />
          </div>
          <div
            class="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out"
            :class="{ 'max-h-screen opacity-100' : index === selected }"
          >
            <p class="pt-2.5 lg:pt-5 pb-5 lg:pb-10">{{ question.answer }}</p>
          </div>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    }
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClick(i) {
      if(this.selected === i) return this.selected = null;
      this.selected = i;
    },
	},
};
</script>