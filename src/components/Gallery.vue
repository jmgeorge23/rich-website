<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="thumbUrl(photo.filename)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import photos from "@/photos.json";
export default {
  name: "Gallery",
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
  },
};
</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 0.3rem;
  max-width: 90rem;
  margin: 3rem auto;
}
.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
}
</style>
