<template>
  <section class="container">
    <div>
      <tabs>
        <tab name="Home" :selected="true">
        </tab>
        <tab name="About">
          <about></about>
        </tab>
        <tab name="Contact">
          <contact></contact>
        </tab>
        <tab name="Fun Stuff">
          <h1>fun stuff tab</h1>
        </tab>
      </tabs>
      <app-logo/>
      <h1 class="title">
        vue-challenge
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <div>
        <modal></modal>
      </div>
    </div>

  </section>
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
      CSSPlugin.useSVGTransformAttr = true;

      // var modalButton = document.querySelector('#animateID');
      // this.modalWidth = modalButton.offsetWidth;
      // this.modalHeight = modalButton.offsetHeight;
      // var xRatio = modalButton.offsetLeft / screen.width;
      // var yRatio = modalButton.offsetTop / screen.height;
      // this.xModalStart = xRatio;
      // this.yModalStart = yRatio;
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
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
