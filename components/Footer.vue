<template>
  <footer>
    <article class="container pt-10 pb-5 xl:py-14">
      <section class="flex">
        <div class="w-16 mr-5 md:mr-12 lg:mr-5 sm:w-44 lg:w-64 xl:w-52">
          <Logo :dark="true" class="w-16 sm:w-44 md:pb-16" />
        </div>
        <div class="flex-1 mr-8 xl:mr-0">
          <ul class="font-conthrax text-14 lg:text-18 xl:flex xl:justify-evenly">
            <li class="pb-4 lg:pr-8">
              <NuxtLink to="/what-we-do">What we do</NuxtLink>
              <ul class="hidden xl:block xl:pt-5 text-14">
                <li class="pb-5"><NuxtLink to="/what-we-do">About JCR</NuxtLink></li>
                <li class="pb-5"><NuxtLink to="/our-vision">Our vision</NuxtLink></li>
                <li class="pb-5"><NuxtLink to="/what-is-a-cyber-range">What is a cyber range?</NuxtLink></li>
              </ul>
            </li>
            <li class="pb-4 lg:pr-8">
              <NuxtLink to="/how-it-works">How it works</NuxtLink>
              <ul class="hidden xl:block xl:pt-5 text-14">
                <li class="pb-5"><NuxtLink to="/how-it-works">Platform</NuxtLink></li>
                <li class="pb-5"><NuxtLink to="/is-it-safe">Is it safe?</NuxtLink></li>
                <li class="pb-5"><NuxtLink to="/faq">FAQ</NuxtLink></li>
              </ul>
            </li>
            <li class="pb-4 lg:pr-8">
              <NuxtLink to="/why-jcr">Why JCR</NuxtLink>
            </li>
            <li class="pb-4 lg:pr-8">
              <NuxtLink to="/contact-us">Contact us</NuxtLink>
            </li>
            <li class="pb-4 lg:pr-8 xl:hidden">
              <NuxtLink to="/demo">Request a DEMO</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <ul class="font-conthrax text-14">
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full mr-2.5"></div>
                <span class="hidden md:block">Twitter</span>
              </a>
            </li>
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full mr-2.5"></div>
                <span class="hidden md:block">LinkedIn</span>
              </a>
            </li>
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full mr-2.5"></div>
                <span class="hidden md:block">E-mail</span>
              </a>
            </li>
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full mr-2.5"></div>
                <span class="hidden md:block">Status</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <aside class="w-full">
        <p class="font-conthrax text-12">© Joint Cyber Range {{ currentYear }}</p>
      </aside>
    </article>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
}
</script>