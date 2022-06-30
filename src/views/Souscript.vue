<template>
<div>  
                        <!--begin section-white -->
            <section class="section-white  animate__animated animate__fadeInLeft" id="qui-peut-souscrire">

                <!--begin container -->
                <div class="container">

                    <!--begin row -->
                    <div class="row">

                        <!--begin col-md-12 -->
                        <div class="col-md-12 text-center margin-bottom-10">

                            <h2 class="section-title">NOS CONDITIONS</h2>

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
                                    <h4>Qui peut souscrire ?</h4>

                                    <img  class="img-fluid img-responsive" src="/assets/images/qps-1.png" alt=""/>

                            </div>
                            <!--end col-md-4 -->

                             <!--begin col-md-4 -->
                            <div class="col-md-6 text-center">
                                    <h4>Nos Délais de carence </h4>

                                    <img  class="img-fluid img-responsive" src="/assets/images/qps-2.png" alt=""/>

                            </div>
                            <!--end col-md-4 -->
                            <!--end col-md-4 -->

                            <!--begin col-md-4 -->
                             <!--begin col-md-4 -->
                            <div class="col-md-6 text-center">
                                    <h4>Nos Plafonds</h4>

                                    <img  class="img-fluid img-responsive" src="/assets/images/qps-3.png" alt=""/>

                            </div>
                            <!--end col-md-4 -->
                            <!--end col-md-4 -->
                             <!--begin col-md-4 -->
                            <div class="col-md-6 text-center">
                                    <h4>Nos Surprimes</h4>

                                    <img  class="img-fluid img-responsive" src="/assets/images/qps-4.png" alt=""/>

                            </div>
                            <!--end col-md-4 -->
                    
                        </div>
                        <!--end row -->
                        
                    </div>
                    <!--end container -->

                </div>
                <!--end services-wrapper -->

            </section>
            <!--end section-white -->

                <div class="row " style="margin-top: -2%;">
                    <div class="col-md-2 mx-auto" target="blank" >
                        <a href="#" @click="link">                                                       
                        <img class="img-fluid w-75 " src="assets/images/playstor.jpg" alt="">
                        </a>
                    </div>
               </div>
 </div>
</template>

<script>
export default {
    name: 'SouscriptSection',
    


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


faut tester
<!-- https://bit.ly/3Cm46JJ -->