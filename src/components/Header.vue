<template>
  <v-app id="inspire">
    <v-app-bar app color="#6398BB" flat>
      <v-container class="d-flex justify-end">
        <v-btn
          v-for="link in links"
          :key="link"
          text
          color="white"
          @click="$router.push({ name: link }).catch(() => {})"
        >
          {{ link }}
        </v-btn>
      </v-container>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "Contact", "Work"],
  }),
};
</script>
