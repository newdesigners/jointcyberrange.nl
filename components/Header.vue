<template>
  <header class="w-full self-start z-10 delay-100 h-20 transition-height duration-500 ease-in-out sticky top-0 bg-primary overflow-hidden xl:overflow-visible" :class="{ 'h-screen' : isActive }">
    <div class="h-20 container flex justify-between flex-wrap xl:justify-start">
      <div class="h-20 py-2.5 w-full flex justify-between xl:w-initial">
        <NuxtLink to="/" @click.native="onClose">
          <Logo :dark="true" class="w-20" />
        </NuxtLink>
        <aside class="flex justify-center items-center xl:hidden"> 
          <tasty-burger-button
            ref="hamburger"
            type="spin"
            :active="isActive"
            :color="color"
            :active-color="activeColor"
            :size="size"
            @toggle="onToggle"
          />
        </aside>
      </div>
      <div class="delay-200 transition duration-500 ease-out opacity-0 w-full font-conthrax text-18 text-white xl:flex  xl:flex-1 xl:opacity-100 xl:h-full xl:justify-end" :class="{ 'header--open' : isActive }">
        <ul class="py-6 xl:flex xl:py-0 xl:items-center xl:h-full" @click="onClose">
          <li class="h-full relative pb-4 xl:pb-0 xl:mr-12 flex justify-between items-center flex-wrap gap-y-6 menu-sub">
            <NuxtLink to="/about-jcr">What we do</NuxtLink>
            <div class="w-full xl:hidden menu-sub__container xl:w-initial">
              <ul class="pl-6 bg-primary xl:pl-0">
                <li class="menu-sub__item pb-4 xl:py-5 xl:px-16"><NuxtLink class="menu-sub__link inline-block w-44 xl:text-center" to="/about-jcr"><span>About JCR</span></NuxtLink></li>
                <li class="menu-sub__item pb-4 xl:py-5 xl:px-16"><NuxtLink class="menu-sub__link inline-block w-44 xl:text-center" to="/our-vision"><span>Our vision</span></NuxtLink></li>
                <li class="menu-sub__item pb-4 xl:py-5 xl:px-16"><NuxtLink class="menu-sub__link inline-block w-44 xl:text-center" to="/what-is-cyber-range"><span>What is a cyber range?</span></NuxtLink></li>
              </ul>
            </div>
          </li>
          <li class="h-full relative pb-4 xl:pb-0 xl:mr-12 flex justify-between items-center flex-wrap gap-y-6 menu-sub">
            <NuxtLink to="/platform">How it works</NuxtLink>
            <div class="w-full xl:hidden menu-sub__container xl:w-initial">
              <ul class="pl-6 bg-primary xl:pl-0">
                <li class="menu-sub__item pb-4 xl:py-5 xl:px-16"><NuxtLink class="menu-sub__link inline-block w-44 xl:text-center" to="/platform"><span>Platform</span></NuxtLink></li>
                <li class="menu-sub__item pb-4 xl:py-5 xl:px-16"><NuxtLink class="menu-sub__link inline-block w-44 xl:text-center" to="/is-it-safe"><span>Is it safe?</span></NuxtLink></li>
                <li class="menu-sub__item pb-4 xl:py-5 xl:px-16"><NuxtLink class="menu-sub__link inline-block w-44 xl:text-center" to="/faq"><span>FAQ</span></NuxtLink></li>
              </ul>
            </div>
          </li>
          <li class="pb-4 xl:pb-0 xl:mr-12"><NuxtLink to="/why-jcr">Why JCR</NuxtLink></li>
          <li class="pb-4 xl:pb-0 xl:mr-12"><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
          <li class="pb-4 xl:pb-0"><NuxtLink class="btn btn--small" to="/demo">Demo</NuxtLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSubNavOpen1: false,
      isSubNavOpen2: false,
      isActive: false,
      size: "s",
      color: "#FFFFFF",
      activeColor: "#FFFFFF"
    };
  },
  methods: {
    onToggle(active) {
      this.isActive = active;
    },
    onClose() {
      this.isActive = false;
    },
  },
}
</script>