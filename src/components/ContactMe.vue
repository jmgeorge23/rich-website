<template>
  <v-img
    fluid
    height="100vh"
    src="https://cdna.artstation.com/p/assets/images/images/025/417/556/medium/rich-george-rock1.jpg?1585733286"
  >
    <v-row>
      <v-col cols="12">
        <v-avatar class="profile" size="164">
          <v-img src="@/assets/rich.jpg"></v-img>
        </v-avatar>
      </v-col>

      <v-col class="py-0">
        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content>
            <v-list-item-title class="title"
              >I'm a concept designer<br />living in Glasgow, Scotland,<br />
              use the buttons below<br />to contact Me</v-list-item-title
            >
          </v-list-item-content>
          <v-container fluid>
            <v-btn
              class="button"
              icon
              href="mailto:richardliamgeorge@gmail.com"
            >
              <v-icon fluid>mdi-email</v-icon>
            </v-btn>
            <v-btn
              icon
              class="button"
              href="https://www.artstation.com/richardliamgeorge"
              target="_blank"
            >
              <div class="parent" />
              <v-icon>mdi-artstation</v-icon>
            </v-btn>
            <v-btn
              icon
              class="button"
              href="https://www.linkedin.com/in/richard-george-8584a282/"
              target="_blank"
            >
              <div class="divider" />
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-container>
        </v-list-item>
      </v-col>
    </v-row>
  </v-img>
</template>

<style>
.img {
  overflow: hidden;
  height: 100vh;
}
.title {
  font-family: "Interval Sans";
  color: white;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: 5px;
  font-size: 150%;
  position: absolute;
  top: 140px;
  left: -150px;
}

.profile {
  position: absolute;
  top: 150px;
  left: -50px;
}

.button {
  position: relative;
  left: -45px;
  top: 210px;
}
</style>
