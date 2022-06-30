<template>
    <div>
         <!--begin section-grey -->
    <section class="section-grey" style="margin-top:-3%;">
        
        <!--begin container-->
        <div class="container">

            <!--begin row-->
            <div class="row align-items-center">
            
                <!--begin col-md-6-->
                <div class="col-md-6 wow slideInLeft" data-wow-delay="0.25s" style="visibility: visible; animation-delay: 0.25s; animation-name: slideInLeft;">

                    <div class="margin-right-15">

                        <img src="assets/images/vs-1.png" class="width-100 image-shadow bottom-margins-images" alt="pic">

                    </div>
                    
                </div>
                <!--end col-sm-6-->
                
                <!--begin col-md-6-->
                <div class="col-md-6">

                    <h3>La Mutuelle Santé Awoundjô est ce qu'il faut pour vous accompagner.</h3>

                    <p>Chez nous, vous  êtes unique. Nous disposons de plusieurs offres pour vous satisfaire. </p>

                    
                    <ul class="benefits">
                        <li><i class="fas fa-handshake"></i> Assurance santé pour :</li>
                        <li><i class="fas fa-check"></i> Famille et Personne individuelle</li>
                        <li><i class="fas fa-check"></i> Entreprise et Ecole</li> 
                        <li><i class="fas fa-check"></i> Communauté et Secteur informel</li>
                        
                    </ul>
                    <router-link to="/nos-offres" class="btn-red small scrool" >Nos tarifs</router-link>

                   <!--  <a href="#" class="btn-red small scrool">Nos tarifs</a> -->

                </div>
                <!--end col-md-6-->
            
            </div>
            <!--end row-->
    
        </div>
        <!--end container-->
    
    </section>
    <!--end section-grey-->
    </div>
</template>

<script>
export default {
    name: 'AproposSection',

}
</script>