<template>
  <div 
    v-editable="blok"
  >
    <article class="">
      <div class="container">
        <h2 class="pb-5 md:pb-12">{{ blok.title }}</h2>
      </div>
      <div class="container px-2 md:px-container lg:px-container-lg xl:px-container-xl">
        <ul class="">
          <li
            class="mb-28 card--member"
            v-for="member in blok.members"
            :key="member._uid"
          >
            <CardMember :blok="member" />
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