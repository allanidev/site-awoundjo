<template>
    <div>

        <!--begin home section -->
        <section class="home-section animate__animated animate__zoomIn" id="acceuil">

            <div class="home-section-overlay"></div>

            <!--begin container -->
            <div class="container">

                <!--begin row -->
                <div class="row">
                
                    <!--begin col-md-6-->
                    <div class="col-md-6">

                        <h1>A CHAQUE PROFIL SON ASSURANCE SANTE</h1>

                        <p class="hero-text">Avec la  mutuelle santé Awoundjô , profiter de la meilleure offre de couverture santé et d'un service de qualité.</p>

                        <!--begin popup-video-wrapper-->
                        <div class="popup-gallery-wrapper">
                            
                            <!--begin popup-video-->
                            <div class="popup-gallery hero-gallery">
                                
                                <a class="popup4 video-icon" href="https://www.youtube.com/watch?v=sj7Vzw_iuz">
                                    <i class="fas fa-play"></i>
                                </a>

                            </div>
                            <!--end popup-video-->

                            <p class="popup-video-text">Regarder la video de présentation</p>

                        </div>
                        <!--end popup-video-wrapper-->

                    </div>
                    <!--end col-md-6-->

                    <!--begin col-md-5-->
                    <div class="col-md-5 offset-md-1">

                    </div>
                    <!--end col-sm-5-->
                    
                </div>
                <!--end row -->

            </div>
            <!--end container -->

        </section>
        <!--end home section -->

            
        <!--begin partners-section-->
        <div class="partners-section">
            
            <!--begin container-->
            <div class="container">

                <!--begin row-->
                <div class="row">
                
                    <!--begin col-sm-12-->
                    <div class="col-md-8 mx-auto text-center partners pt">
                        <h1 class="text-white">MUTUELLE SANTE AWOUNDJO</h1>
                        

                        <p class="text-white">
                                                    
                            La première Mutuelle santé générale agréée par l'UEMOA, 

                            Arrêtén°019-072/MEPS/CAB du <br> 27-08-2019. IMMATRICULATION 1D/0342019/CI.
                        <br>
                    <strong>  Votre santé, notre préoccupation !</strong>
                        </p>
                    
                    
                    </div>
                    <!--end col-sm-12-->
                    
                </div>
                <!--end row-->
                
            </div>
            <!--end container-->
        
        </div> 
        <!--end partners-section-->


    </div>


        <souscript-section/>

        <apropos-section/>

         <support-section/>
        
        <partenaire-section />
        <btn-section/>

</template>

<script>

import PartenaireSection from '../components/Partenaire.vue';
import SouscriptSection from '../views/Souscript.vue';
import AproposSection from '../views/Apropos.vue';
import SupportSection from '../views/Support.vue'
import BtnSection from '../components/Btn.vue'
export default {
    name: 'HomeSection',
    components:{
        PartenaireSection,
        SouscriptSection,
        AproposSection,
        SupportSection,
        BtnSection,
    }
  
    }
</script>