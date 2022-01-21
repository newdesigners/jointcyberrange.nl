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
           <div class="right">
              <input
                class="text-primary w-full py-4 px-5 rounded-md mb-4"
                name="first_name"
                placeholder="First Name"
              />
              <input
                class="text-primary w-full py-4 px-5 rounded-md mb-4"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input 
                class="text-primary w-full py-4 px-5 rounded-md mb-4" 
                name="e-mail" 
                placeholder="E-mail"
              />
            <div>
              <textarea
                class="text-primary w-full py-4 px-5 rounded-md mb-4 h-[200px]"
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
        <!-- <div class="flex">
          <div class="mx-auto">
            <div class="right">
              <input class="field-first-name" placeholder="First Name">
              <input class="field-last-name" placeholder="Last Name">
            </div>
            <div>
              <input class="field-e-mail" placeholder="E-mail">
            <div>
              <textarea placeholder="Message" class="field-message"></textarea>
            </div>
            </div>
            <div class="flex items-center">
            <button class="btn">Submit</button>
            </div>
          </div>
        </div> -->
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