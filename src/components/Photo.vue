<template>
  <v-container
    fluid
    style="margin: 0px; padding: 0px; width: 100%; height: 100%"
  >
    <div class="lightbox" @click.self="closeLightbox">
      <img :src="photoUrl(photo.filename)" />
    </div>
  </v-container>
</template>

<script>
import photos from "@/photos.json";
export default {
  name: "Photo",
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },
    closeLightbox() {
      this.$router.push("/work");
    },
  },
};
</script>

<style>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.lightbox img {
  max-width: 90vmax;
  max-height: 90vmax;
  margin: 4rem;
  padding-left: 1%;
  padding-top: 1%;

  grid-column-start: 1;
  object-fit: fill;
}
html {
  overflow: scroll;
  height: 230vh;
}
</style>
