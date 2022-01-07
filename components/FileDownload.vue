<template>
  <div
    v-editable="blok"
    class="py-5 lg:py-10"
  >
    <article class="pt-28 container" :id="blok.anchor_id">
      <ul class="w-11/12 pb-16 lg:pb-32">
        <li
          v-for="file in blok.files"
          :key="file._uid"
          class="flex justify-between items-center border-white border-b-2 px-3 lg:px-6 pb-3 lg:pb-6 mb-2.5 lg:mb-5 gap-x-5"
        >
          <p v-if="file.file.title">{{ file.file.title }}</p>
          <a
            v-if="file"
            :href="file.file.filename"
            download
            class="font-futura-bold inline-block text-blue"
          >
            Download
          </a>
        </li>
      </ul>
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