<template>
  <div>
    <img class="batman-logo" src="/batman.png" v-show="batmanDisplay"/>
    <section class="container">
      <div>
        <tabs @selectTab="onClick">
          <tab name="Home" :selected="true">
            <app-logo/>
            <h1 class="title">
              vue-challenge
            </h1>
            <h2 class="subtitle">
              Nuxt.js project
            </h2>
            <div>
              <modal></modal>
            </div>
          </tab>
          <tab name="Team">
            <h1>Team Page</h1>
          </tab>
          <tab name="Elizabeth">
            <h1>Elizabeth's Page</h1>
            <Profile
              name="Elizabeth Nicholson"
              profilePicture="/liz.jpg"
            />
          </tab>
          <tab name="Jared">
            <Profile
              name="Jared Potter"
              profilePicture="/jared4.jpg"
              :images="[
                {url: '/jared1.jpg', alt: 'pic1', caption: 'Horseshoe Bend, AZ - my favorite place.'},
                {url: '/jared2.jpg', alt: 'pic2', caption: 'Summit of Mount Timpanogos.'},
                {url: '/jared3.jpg', alt: 'pic3', caption: 'Hiking with my brother Tyson in the foothills behind the Utah State Capital.'}]"
              bio="Hey there. My name is Jared Potter. I work as a full time software engineer at a local company called Utah Health Information Network (UHIN). Outside of work I enjoy the personal finanice, cryptocurrencies, and Utah's epic outdoors - hiking with my brother, learning to ski, and going to the park with my significant other Amber, and her two dogs, Gus and Lugar."/>
          </tab>
        </tabs>
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
  import Profile from '~/components/Profile.vue';

  export default {
    components: {
      AppLogo, Tabs, Tab, About, Contact, Modal, Profile
    },
    mounted() {

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
.batman-logo {
  z-index: 5;
  width: 50px;
  float:left;
  opacity: 1;
  position: relative;
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
  z-index: 0;
  position: relative;
/*  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Archimedean_spiral_8revolution.svg/1058px-Archimedean_spiral_8revolution.svg.png");*/

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

/*.nav-tabs .nav-links {
    border: 1px solid transparent;
    border-top-left-radius: 4px;
    border-top-left-radius: .25rem;
    border-top-right-radius: 4px;
    border-top-right-radius: .25rem;
}

.nav-link {
    display: block;
    padding: 8px 16px;
    padding: .5rem 1rem;
}

.nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.nav-tabs .nav-item {
    margin-bottom: -1px;
}

ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}*/
</style>
