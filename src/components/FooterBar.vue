<template>
  <v-footer color="#6398BB" inset app>
    <v-card-text class="footer">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        icon
        text
        color="#FFFFFF"
      >
        <a :href="'//' + `${icon.link}`" target="_blank">
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </a>
      </v-btn>
    </v-card-text>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-email", link: "email.com" },
      {
        icon: "mdi-instagram",
        link: "instagram.com/rich_george_3d/",
      },
      {
        icon: "mdi-artstation",
        link: "artstation.com/richardliamgeorge",
      },
    ],
  }),
};
</script>

<style>
.footer {
  justify-content: center;
  display: flex;
}

/* unvisited link */
a:link {
  color: white;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: black;
}
</style>
