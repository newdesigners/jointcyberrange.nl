<template>
  <div 
    v-editable="blok"
  >
    <article class="">
      <div class="container">
        <h2 class="pb-5 lg:pb-10">{{ blok.title }}</h2>
      </div>
      <div class="px-2">
        <ul class="">
          <li
            class="mb-28 card"
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