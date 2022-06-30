<template>
    <div>
         <!--begin section-white -->
     <section class="section-white mt-5  animate__animated animate__zoomIn" id="simuler-un-devis">
            
            <!--begin container-->
            <div class="container">

                <div class="row mt-5 pb-3">
                    <div class="col-md-12 mx-auto text-center">
                        <h3> CHOISSISEZ LA FORMULE QUI VOUS CONVIENT ET SIMULER UN DEVIS</h3>

                            <div class="mx-auto">
                                <button class="btn-red small scrool w-30" @click="showdevisUn">Individuel / Famille</button>
                                <button class="btn-red small scrool  w-30" @click="showdevisDeux">Entreprise / Communauté</button>
                            </div>
                    </div>
                </div>

                <!--begin row-->
                <div class="row align-items-center">
                
                    <!--begin col-md-6-->
                    <div class="col-md-6">
                    
                    
                            <simuler-devis-un-section v-if="devisUn" />

                            <simuler-devis-deux-section v-if="devisDeux"/>

                    </div>
                    <!--end col-md-6-->
                
                    <!--begin col-md-6-->
                    <div class="col-md-6 wow slideInRight" data-wow-delay="0.25s" style="visibility: visible; animation-delay: 0.25s; animation-name: slideInRight;">

                        <div class="margin-left-15">

                            <img src="/assets/images/devis.png" class="width-100 image-shadow top-margins-images" alt="pic">

                        </div>
                        
                    </div>
                    <!--end col-sm-6-->
                    
                </div>
                <!--end row-->
        
            </div>
            <!--end container-->
        
        </section>
        <!--end section-white-->   
    </div>
</template>

<script>
import SimulerDevisUnSection from '../components/SimulerDevisUn.vue';
import SimulerDevisDeuxSection from '../components/SimulerDevisDeux.vue';
export default {
    name: 'DevisSection',
   components:{
       SimulerDevisUnSection,
       SimulerDevisDeuxSection,
   },
   data(){
       return {
           devisUn: true,
           devisDeux: false,
       }
   },
    methods:{
        showdevisUn(){
            this.devisUn= true;
            this.devisDeux=false;
        },
        showdevisDeux(){
            this.devisUn= false;
            this.devisDeux=true;
        }
    }
}
</script>