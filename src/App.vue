<template>
     <info-section text="Retrouver notre application compte client awoundjo sur google playstore et télécharger la pour vous inscrire" link="https://bit.ly/3Cm46JJ" linkName="ici"/>
     <nav-section/>

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
   -->

  <router-view/>

  <footer-section/>

</template>

<script>
import InfoSection from './components/Info.vue';
import NavSection from './components/Nav.vue';
import FooterSection from './components/Footer.vue';

export default {
  components:{
    InfoSection,
    NavSection,
    FooterSection,

  },
   data(){
        return{
            acceuil:'/',
            qps: true,
        }
    }
}
</script>
