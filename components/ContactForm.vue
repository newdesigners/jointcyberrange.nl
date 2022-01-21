<template>
  <div
    v-editable="blok"
    class="pb-10 lg:pb-20 xl:pb-24 relative"
  >
    <article class="container relative background__highlight">
      <div class="sm:w-4/5 mx-auto max-w-[670px]">
        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="contact-form">
          <div class="md:flex gap-x-8">
              <input
                class="text-primary w-full py-4 px-5 rounded-md mb-4 md:mb-8"
                name="first_name"
                placeholder="First Name"
              />
              <input
                class="text-primary w-full py-4 px-5 rounded-md mb-4 md:mb-8"
                name="last_name"
                placeholder="Last Name"
              />
          </div>
          <div>
            <input 
              class="text-primary w-full py-4 px-5 rounded-md mb-4 md:mb-8" 
              name="e-mail" 
              placeholder="E-mail"
            />
            <div class="mb-6 md:mb-12">
              <textarea
                class="text-primary w-full py-4 px-5 rounded-md h-[200px]"
                placeholder="Message"
                name="message"
                >
              </textarea>
            </div>
          </div>
          <div class="flex items-center">
            <button class="btn">Submit</button>
          </div>
        </form>
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