<template>
    <div>
        <!--begin section-white -->
            <section class="section-white  animate__animated animate__fadeInLeft" id="nos-offres">

                <!--begin container -->
                <div class="container">

                    <!--begin row -->
                    <div class="row">

                        <!--begin col-md-12 -->
                        <div class="col-md-12 text-center margin-bottom-10">

                            <h2 class="section-title">Nos offres</h2>

                           <!--  <p class="section-subtitle">Dicover how our amazing team can help your business.</p> -->
                            
                        </div>
                        <!--end col-md-12 -->

                    </div>
                    <!--end row -->

                </div>
                <!--end container -->

                <!--begin services-wrapper -->
                <div class="services-wrapper">

                    <!--begin container -->
                    <div class="container">

                        <!--begin row -->
                        <div class="row">

                            <!--begin col-md-4 -->
                            <div class="col-md-6 text-center">
                                    <h4>Famille</h4>

                                    <img  class="img-fluid img-responsive" src="/assets/images/famille.png" alt=""/>

                            </div>
                            <!--end col-md-4 -->

                             <!--begin col-md-4 -->
                            <div class="col-md-6 text-center">
                                    <h4> individuel</h4>

                                    <img  class="img-fluid img-responsive" src="/assets/images/indiv.png" alt=""/>

                            </div>
                           <div class="mx-auto mt-5">
                                <a href="" @click="changelink" class="btn-red small scrool  ">Adhérer Maintenant</a>
                           </div>
                            <div class="mx-auto mt-5">
                                <router-link to="/simuler-un-devis" class="btn-red small scrool  ">Demander un devis</router-link>
                            </div>

                                    

                            <!--end col-md-4 -->
                            <!--end col-md-4 -->

                            <!--begin col-md-4 -->
                             <!--begin col-md-4 -->
                           
                            <!--end col-md-4 -->
                    
                        </div>
                        <!--end row -->
                        
                    </div>
                    <!--end container -->

                </div>
                <!--end services-wrapper -->

            </section>
            <!--end section-white -->
    </div>
</template>

<script>
import SupportSection from '../views/Support.vue';
export default {
    name: 'OffreSection',
    components:{
        SupportSection
    },

       methods:{
         getOS(){
            
             var userAgent = window.navigator.userAgent,
                    platform = window.navigator?.userAgentData?.platform ?? window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = null;

                if (macosPlatforms.indexOf(platform) !== -1) {
                    os = 'Mac OS';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    os = 'IOS';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = 'Windows';
                } else if (/Android/.test(userAgent)) {
                    os = 'Android';
                } else if (!os && /Linux/.test(platform)) {
                    os = 'Linux';
                }

               this.OS = os;
         },
                


         changelink(){
             this.getOS();
            

            if(this.OS == "Windows" || this.OS == "Linux"){
                window.open ('https://compte.mutuelleawoundjo.com/web/index.php?view=signup')

            }
             if(this.OS == "IOS" || this.OS == "Android" ){
                window.open ('https://compte.mutuelleawoundjo.com/web/index.php?view=signup')
            }
            
        }
    },

    
   
}
</script>