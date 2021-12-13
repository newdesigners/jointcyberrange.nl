<template>
  <footer>
    <article class="container">
      <section class="flex">
        <div class="w-16">
          <Logo :dark="true" class="w-16 lg:w-44" />
          <p class="hidden lg:block font-conthrax text-14">© Joint Cyber Range {{ currentYear }}</p>
        </div>
        <div>
          <ul class="font-conthrax">
            <li>
              <NuxtLink to="/what-we-do">What we do</NuxtLink>
              <ul class="hidden lg:block">
                <li><NuxtLink to="/what-we-do">About JCR</NuxtLink></li>
                <li><NuxtLink to="/our-vision">Our vision</NuxtLink></li>
                <li><NuxtLink to="/what-is-a-cyber-range">What is a cyber range?</NuxtLink></li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/how-it-works">How it works</NuxtLink>
              <ul class="hidden lg:block">
                <li><NuxtLink to="/how-it-works">Platform</NuxtLink></li>
                <li><NuxtLink to="/is-it-safe">Is it safe?</NuxtLink></li>
                <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/why-jcr">Why JCR</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us">Contact us</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-9 h-9 bg-secondary rounded-full"></div>
                <span class="hidden lg:block">Twitter</span>
              </a>
            </li>
            <li>
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-9 h-9 bg-secondary rounded-full"></div>
                <span class="hidden lg:block">Twitter</span>
              </a>
            </li>
            <li>
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-9 h-9 bg-secondary rounded-full"></div>
                <span class="hidden lg:block">Twitter</span>
              </a>
            </li>
            <li>
              <a class="inline-flex items-center" href="" rel="noopener noreferrer" target="_blank">
                <div class="w-9 h-9 bg-secondary rounded-full"></div>
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