<template>
  <footer>
    <article class="container pt-10 pb-5">
      <section class="flex pb-5">
        <div class="w-16 mr-5">
          <Logo :dark="true" class="w-16 lg:w-44" />
          <p class="hidden lg:block font-conthrax text-14">© Joint Cyber Range {{ currentYear }}</p>
        </div>
        <div class="flex-1 mr-8">
          <ul class="font-conthrax text-14">
            <li class="pb-4">
              <NuxtLink to="/what-we-do">What we do</NuxtLink>
              <ul class="hidden lg:block">
                <li><NuxtLink to="/what-we-do">About JCR</NuxtLink></li>
                <li><NuxtLink to="/our-vision">Our vision</NuxtLink></li>
                <li><NuxtLink to="/what-is-a-cyber-range">What is a cyber range?</NuxtLink></li>
              </ul>
            </li>
            <li class="pb-4">
              <NuxtLink to="/how-it-works">How it works</NuxtLink>
              <ul class="hidden lg:block">
                <li><NuxtLink to="/how-it-works">Platform</NuxtLink></li>
                <li><NuxtLink to="/is-it-safe">Is it safe?</NuxtLink></li>
                <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
              </ul>
            </li>
            <li class="pb-4">
              <NuxtLink to="/why-jcr">Why JCR</NuxtLink>
            </li>
            <li class="pb-4">
              <NuxtLink to="/contact-us">Contact us</NuxtLink>
            </li>
            <li class="pb-4">
              <NuxtLink to="/demo">Request a DEMO</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full"></div>
                <span class="hidden lg:block">Twitter</span>
              </a>
            </li>
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full"></div>
                <span class="hidden lg:block">Twitter</span>
              </a>
            </li>
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full"></div>
                <span class="hidden lg:block">Twitter</span>
              </a>
            </li>
            <li class="pb-2.5">
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-8 h-8 bg-secondary rounded-full"></div>
                <span class="hidden lg:block">Twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <aside>
        <p class="w-full block lg:hidden font-conthrax text-14">© Joint Cyber Range {{ currentYear }}</p>
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