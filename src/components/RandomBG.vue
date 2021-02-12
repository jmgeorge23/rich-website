<template>
  <section>
    <v-card>
      <v-container
        fluid
        style="margin: 0px; padding: 0px; width: 100%; height: 100%"
      >
        <v-img class="img" img :src="selectedImage">
          <span class="my-span">
            Richard George
          </span>
          <span class="my-span2">
            Concept Designer
          </span>
        </v-img>
      </v-container>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://cdna.artstation.com/p/assets/images/images/033/974/380/medium/rich-george-final-render.jpg?1611068757",
        "https://cdna.artstation.com/p/assets/images/images/033/776/272/medium/rich-george-finished-mando-copy.jpg?1610541320",
        "https://cdnb.artstation.com/p/assets/images/images/033/550/713/medium/rich-george-final-image-copy.jpg?1609928606",
        "https://cdnb.artstation.com/p/assets/images/images/031/894/179/large/rich-george-final-for-art.jpg?1604918554",
        "https://cdnb.artstation.com/p/assets/images/images/032/691/191/medium/rich-george-final-fireworks.jpg?1607182298",
        "https://cdna.artstation.com/p/assets/images/images/031/361/256/large/rich-george-finished.jpg?1603399466",
        "https://cdnb.artstation.com/p/assets/images/images/031/062/873/large/rich-george-gettingthere2.jpg?1602499634",
        "https://cdnb.artstation.com/p/assets/images/images/030/145/603/large/rich-george-photoshop2.jpg?1599740921",
        "https://cdna.artstation.com/p/assets/images/images/034/207/710/large/rich-george-finalfinalrender1.jpg?1611687160",
        "https://cdnb.artstation.com/p/assets/images/images/029/778/173/large/rich-george-finalrenderlarger.jpg?1598611680",
        "https://cdna.artstation.com/p/assets/images/images/028/498/878/large/rich-george-screen-shot-2020-07-13-at-18-18-15.jpg?1594660769",
        "https://cdna.artstation.com/p/assets/images/images/028/144/118/large/rich-george-patreon10-daylight.jpg?1593609887",
        "https://cdnb.artstation.com/p/assets/images/images/028/109/599/large/rich-george-finalrender.jpg?1593513101",
        "https://cdna.artstation.com/p/assets/images/images/026/053/292/large/rich-george-building5.jpg?1587738799",
      ],
      selectedImage: "",
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  },
};
</script>

<style scoped>
.img {
  overflow: hidden;
  height: 100vh;
  background: black;
}

.my-span {
  font-family: "Interval Sans";
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1em;
  letter-spacing: 5px;
  font-size: 200%;
  position: absolute;
  width: 395px;
  height: 50px;
  left: 0px;
  top: 240px;
  padding: 8px;
  padding-left: 20px;
  background: #402228;
}

.my-span2 {
  font-family: "Interval Sans";
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.3em;
  letter-spacing: 15px;
  font-size: 130%;
  position: absolute;
  width: 265px;
  height: 90px;
  left: 0px;
  top: 270px;
  padding-left: 20px;
  padding-top: 20px;
}
</style>
