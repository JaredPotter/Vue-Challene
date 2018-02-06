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
            <div>
    <modal name="foo" id="myModal" :width="30" :height="14" :pivotX="xModalStart" :pivotY="yModalStart">
      Woot
    </modal>
    <p>Hi from <b>{{ name }}</b>.</p>
    <button @click="$modal.show('foo')">
      Open modal
    </button>
    <button id="animateID" @click="openModal">
      Animate
    </button>
  </div>
      </div>
      <!-- <modal name="Hello, Gary.">Hello, Gary!</modal> -->
      <!-- <modal name="Hello, Gary.">Hello, Gary!</modal> -->
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue';
  //import Modal from '~/components/Modal.vue';
  import Tabs from '~/components/Tabs.vue';
  import Tab from '~/components/Tab.vue';
  import About from '~/pages/about.vue';
  import Contact from '~/pages/contact.vue';
  import { TweenMax, TimelineMax, Power0 } from 'gsap';
  import VModal from 'vue-js-modal/dist/ssr.index';

  //Vue.use(VModal, { dialog: true});
  // this.$modal.show('dialog', {
  //   title: 'Alert!',
  //   text: 'You are too awesome',
  //   buttons: [
  //     { 
  //       title: 'Deal with it',
  //       handler: () => { alert('Woot!') }
  //     },
  //     {
  //       title: '',       // Button title
  //       default: true,    // Will be triggered by default if 'Enter' pressed.
  //       handler: () => {} // Button click handler
  //     },
  //     { 
  //       title: 'Close'
  //     }
  //  ]
  // })
  //CSSPlugin.useSVGTransformAttr = true;
  //TweenMax.to('.VueToNuxtLogo', 5, {rotation: 360});

  export default {
    components: {
      AppLogo, Tabs, Tab, About, Contact, VModal
    },
    mounted() {
      CSSPlugin.useSVGTransformAttr = true;
      // TweenMax.to('.links', 5, {rotation: 360});
    },
    data() {
      return {
        xModalStart: 0,
        yModalStart: 0
      }
    },
    methods: {
      openModal() {
        var modalButton = document.querySelector('#animateID');
        var x = modalButton.offsetLeft;
        var y = modalButton.offsetTop;

        var sizeXMax = screen.width;
        var sizeYMax = screen.height;

        var xRatio = x / sizeXMax;
        var yRatio = y / sizeYMax;

        this.xModalStart = 0.53;
        this.yModalStart = 0.8;
        this.$modal.show('foo');
        TweenMax.to('#myModal', 1, {scale: 2, yPercent:"-30%"});
        //TweenMax.to('#dialog', 3, {scale: 2,yPercent:"30%", xPercent:"2%", rotation:3*360, onComplete:closeModal(this)});


        
        // this.$modal.show('dialog', {
        //   title: 'Alert!',
        //   text: 'You are too awesome',
        //   buttons: [
        //     { 
        //       title: 'Deal with it',
        //       handler: () => { alert('Woot!') }
        //     },
        //     {
        //       title: '',       // Button title
        //       default: true,    // Will be triggered by default if 'Enter' pressed.
        //       handler: () => {} // Button click handler
        //     },
        //     { 
        //       title: 'Close',
        //       handler: () => {

        //         // var dialogTween = TweenMax.staggerFrom('#dialog', 2, {opacity: 0, y:1000, rotation: 360});
        //         //TweenMax.to('#dialog', 2, {y: 200, rotation: 360});
        //         TweenMax.to('#dialog', 3, {scale: 0,yPercent:"30%", xPercent:"2%", rotation:3*360, onComplete:closeModal(this)});
        //         function closeModal(modal) {
        //           //modal.$modal.hide('dialog');
        //         }

        //         //var tl = new TimelineMax();
        //         //tl.to('#animateID', 2, {rotation:360}).to("#dialog", 2, {rotation:360});

        //         //this.$modal.hide('dialog');
        //       }
        //     },
        //     { 
        //       title: 'Spin me',
        //       handler: () => {

        //         // var dialogTween = TweenMax.staggerFrom('#dialog', 2, {opacity: 0, y:1000, rotation: 360});
        //         //TweenMax.to('#dialog', 2, {y: 200, rotation: 360});
        //         // TweenMax.from('#dialog', 1, {scale: 0,yPercent:"30%", xPercent:"2%", rotation:3*360});

        //         //var tl = new TimelineMax();
        //         //tl.to('#animateID', 2, {rotation:360}).to("#dialog", 2, {rotation:360});
        //       }
        //     }
        //    ]
        //  });


          // TweenMax.from('#dialog', 1, {scale: 0,yPercent:"30%", xPercent:"2%", rotation:3*360});
        // 
        },

        beforeOpen (event) {
          alert('yes');
          //TweenMax.to('#dialog', {yPercent:"30%", xPercent:"2%", scale: 0});
        },
        beforeClose (event) {
          alert('yes');
        }
    },
    asyncData ({ req }) {
      return {
        name: req ? 'server' : 'client'
      }
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
