<template>
    <div>
             <!--begin features section -->
    <section class="section-white" id="features">

        <!--begin container -->
        <div class="container">

            <!--begin row -->
            <div class="row">

                <!--begin col-md-12-->
                <div class="col-md-12 text-center padding-bottom-10">

                    <h2 class="section-title">NOS ATOUTS</h2>

                    <p class="section-subtitle">Parce que vous êtes unique nous vous offrons un système simple et fiable.</p>

                </div>
                <!--end col-md-12 -->

            </div>
            <!--end row -->

            <!--begin row -->
            <div class="row">

                <!--begin col-md-4-->
                <div class="col-md-4">

                    <div class="feature-box light-green wow fadeIn" data-wow-delay="0.25s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;">

                        <i class="pe-7s-tools"></i>

                        <div class="feature-box-text">

                            <h4>Service Client  24/7</h4>

                            <p>Une équipe dédiée à votre écoute, par téléphone ou par Email.</p>

                        </div>

                    </div>

                </div>
                <!--end col-md-4 -->

                <!--begin col-md-4-->
                <div class="col-md-4">

                    <div class="feature-box light-blue wow fadeIn" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;">

                        <i class="pe-7s-users"></i>

                        <div class="feature-box-text">

                            <h4>Paiement</h4>

                            <p>Un système de paiement simple et sécurisé.</p>

                        </div>

                    </div>

                </div>
                <!--end col-md-4 -->

                <!--begin col-md 4-->
                <div class="col-md-4">

                    <div class="feature-box orange wow fadeIn" data-wow-delay="0.75s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;">

                        <i class="pe-7s-bell"></i>

                        <div class="feature-box-text">

                            <h4>Officines </h4>

                            <p>Proposez des cliniques et pharmacies plus proches de chez vous .</p>


                        </div>

                    </div>

                </div>
                <!--end col-md-4 -->

            </div>
            <!--end row -->

            

        </div>
        <!--end container -->

    </section>
    <!--end features section -->
               <div class="row">
                    <div class="col-md-2 mx-auto" target="blank">
                        <a href="#" @click="link">
                    <img class="img-fluid" src="assets/images/playstor.jpg" alt="">
                   </a>
                    </div>
               </div>
    </div>
</template>

<script>
export default {
    name: 'SupportSection',
   

    methods:{
        link(){
            console.log('[link]');
            if(window.screen.width <=768){
console.log('[link] if');

               window.open('https://bit.ly/3Cm46JJ', '')
              
            }
        }
    }
}
</script>