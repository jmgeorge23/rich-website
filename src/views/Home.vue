<template>
  <div class="body">
    <v-container
      class="bg-img"
      fluid
      style="margin: 0px; padding: 0px; width: 100%; height: 100%"
    >
      <RandomBG />
    </v-container>
  </div>
</template>

<script>
import RandomBG from "../components/RandomBG.vue";
export default {
  components: {
    RandomBG,
  },
};
</script>

<style>
body {
  overflow: hidden;
  height: 100vh;
}
</style>
