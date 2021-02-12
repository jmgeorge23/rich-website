import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Work from "../views/Work.vue";
import VuePageTransition from 'vue-page-transition';
import Photo from '../views/Photo.vue';



Vue.use(VueRouter);
Vue.use(VuePageTransition);




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: 'fade-in-down' },
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
    meta: { transition: 'fade-in-down' },
      
  },
  {
    path: "/Work",
    name: "Work",
    component: Work,
  },
  {
    path: '/photo/:id',
    name: 'photo',
    component: Photo,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

