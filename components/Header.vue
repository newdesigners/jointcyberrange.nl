<template>
  <header class="bg-primary py-2.5 overflow-hidden" :class="{'h-full' : isActive }">
    <div class="container flex justify-between flex-wrap">
      <Logo :dark="true" class="w-20" />
      <aside class="flex justify-center items-center">
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
      <div class="hidden w-full font-conthrax text-18 text-white" :class="{ 'header--open' : isActive }">
        <ul class="py-10">
          <li class="pb-4 flex justify-between items-center flex-wrap gap-y-6">
            <NuxtLink to="/what-we-do">What we do</NuxtLink>
            <div class="w-4 h-2 bg-secondary rounded-full" @click="onClickSubNav1"></div>
            <div class="hidden w-full" :class="{'header--open' : isSubNavOpen1 }">
              <ul class="pl-6">
                <li class="pb-4"><NuxtLink to="/what-we-do">About JCR</NuxtLink></li>
                <li class="pb-4"><NuxtLink to="/our-vision">Our vision</NuxtLink></li>
                <li class="pb-4"><NuxtLink to="/what-is-a-cyber-range">What is a cyber range?</NuxtLink></li>
              </ul>
            </div>
          </li>
          <li class="pb-4 flex justify-between items-center flex-wrap gap-y-6">
            <NuxtLink to="/how-it-works">How it works</NuxtLink>
            <div class="w-4 h-2 bg-secondary rounded-full" @click="onClickSubNav2"></div>
            <div class="hidden w-full" :class="{'header--open' : isSubNavOpen2 }">
              <ul class="pl-6">
                <li class="pb-4"><NuxtLink to="/how-it-works">Platform</NuxtLink></li>
                <li class="pb-4"><NuxtLink to="/is-it-safe">Is it safe?</NuxtLink></li>
                <li class="pb-4"><NuxtLink to="/faq">FAQ</NuxtLink></li>
              </ul>
            </div>
          </li>
          <li class="pb-4"><NuxtLink to="/why-jcr">Why JCR</NuxtLink></li>
          <li class="pb-4"><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
          <li lass="pb-4"><NuxtLink to="/demo">Demo</NuxtLink></li>
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
      color: "#F2F2F2",
      activeColor: "#F2F2F2F2"
    };
  },
  methods: {
    onToggle(active) {
      this.isActive = active;
    },
    onClose() {
      this.isActive = false;
    },
    onClickSubNav1() {
      this.isSubNavOpen1 = !this.isSubNavOpen1;
    },
    onClickSubNav2() {
      this.isSubNavOpen2 = !this.isSubNavOpen2;
    }
  },
}
</script>