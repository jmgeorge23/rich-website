<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/work">Work</router-link>
    </nav>
    <vue-page-transition name="fade-in">
      <router-view> </router-view>
    </vue-page-transition>
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
};
</script>

<style>
html {
  overflow: hidden;
  height: 100%;
}

body {
  overflow: hidden;
  height: 100%;
  background: black;
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: black !important;
}

a {
  color: #0094ff;
  text-decoration: none;
}
a:hover {
  color: #0074c6;
}
</style>
