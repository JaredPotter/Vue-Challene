<template>
  <div>
    <img class="batman-logo" src="/batman.png" v-show="batmanDisplay"/>
    <section class="container">
      <div>
        <tabs @selectTab="onClick">
          <tab name="Home" :selected="true">
            <h1>Home Page</h1>
          </tab>
          <tab name="About">
            <!-- <about></about> -->
            <h1>About Page</h1>
          </tab>
          <tab name="Contact">
            <!-- <contact></contact> -->
            <h1>Contact Page</h1>
          </tab>
          <tab name="Fun Stuff">
            <h1>Fun Stuff Page</h1>
          </tab>
        </tabs>
        <app-logo/>
        <h1 class="title">
          vue-challenge
        </h1>
        <h2 class="subtitle">
          Nuxt.js project
        </h2>
        <div>
          <modal></modal>
          <button
            class="body"
            @click="onClick">
            To Page 2
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue';
  import Modal from '~/components/Modal.vue';
  import Tabs from '~/components/Tabs.vue';
  import Tab from '~/components/Tab.vue';
  import About from '~/pages/about.vue';
  import Contact from '~/pages/contact.vue';
  import { TweenMax, TimelineMax, Power0 } from 'gsap';
  //import VModal from 'vue-js-modal/dist/ssr.index';

  export default {
    components: {
      AppLogo, Tabs, Tab, About, Contact, Modal
    },
    mounted() {
      this.$on('selectTab', function(){
        alert("hey");

        // onClick(); 
      });
    },
    data() {
      return {
        batmanDisplay: false
      }
    },
    methods: {
      onClick:function(){
        TweenLite.to('.container', 2, {rotation:1080, transformOrigin:"50% 50%"});
        this.batmanDisplay = true;
        var tl = new TimelineLite();

        tl.fromTo('.batman-logo', 1, {scale:0, transformOrigin:"50% 50% 100px", x:window.innerWidth/2, xPercent:-50, y:window.innerHeight/2, yPercent:-50}, {scale:50, transformOrigin:"50% 50% 100px"})
          .to('.batman-logo', 1, {scale:0, transformOrigin:"50% 50% 100px"}, 1)
          .to('.batman-logo', 0, {x:-window.innerWidth/2, xPercent:-50, y:-window.innerHeight/2, yPercent:-50}, 2)
          .to('.container', 0, {rotation:-1080, transformOrigin:"50% 50%"})
      }

    }
  }
</script>

<style>
.batman-logo{
  z-index:100;
  width: 50px;
  float:left;
}

.v--modal-box {
  /*background: transparent;*/
  opacity: 0.8;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
