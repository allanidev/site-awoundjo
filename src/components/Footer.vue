<template>
    <div>
        
    <div class="footer">
            
        <!--begin container -->
        <div class="container footer-top">
        
            <!--begin row -->
            <div class="row">
            
                <!--begin col-md-4 -->
                <div class="col-md-4 text-center">
                   
                    <i class="pe-7s-map-2"></i>

                    <h5>Nos Contacts</h5>

                    <p>Riviéra Faya Nv.g, Abidjan Côte d'ivoire </p>
                    
                    <p><a href="contact@mutuelleawoundjo.com">contact@mutuelleawoundjo.com</a></p>
                    
                    <p>+225 01 71 72 16 68</p>
                    
                </div>
                <!--end col-md-4 -->
                
                <!--begin col-md-4 -->
                <div class="col-md-4 text-center">
                   
                    <i class="pe-7s-comment"></i>

                    <h5> Média Sociaux</h5>

                    <p>Retrouvez nous sur ces différents réseaux.</p>
                                         
                    <!--begin footer_social -->
                    <ul class="footer_social">

                        <li><a href="https://www.youtube.com/watch?v=sj7Vzw_iuzs
"><i class="fab fa-youtube"></i></a></li>

                     

                        <li><a href="https://www.facebook.com/MUTUELLESANTEAWOUNDJO"><i class="fab fa-facebook-square"></i></a></li>

                        <li><a href="https://www.linkedin.com/company/mutuelle-sante-awoundjo
"><i class="fab fa-linkedin"></i></a></li>

                        

                    </ul>
                    <!--end footer_social -->
                    
                </div>
                <!--end col-md-4 -->
                
                <!--begin col-md-4 -->
                <div class="col-md-4 text-center">
                   
                    <i class="pe-7s-link"></i>

                    <h5>Liens Divers</h5>

                    <router-link to="/nos-offres" class="footer-links" >Nos Offres</router-link>

                    <router-link to="/simuler-un-devis" class="footer-links" >Simuler un devis</router-link>

                    <a href="#" class="footer-links">Termes et Conditions </a>
                    
                </div>
                <!--end col-md-4 -->
                
            </div>
            <!--end row -->

        </div>
        <!--end container -->
                
        <!--begin container -->
        <div class="container-fluid footer-bottom px-0">
        
            <!--begin row -->
            <div class="row no-gutters mx-0">
            
            
                <!--begin col-md-12 -->
                <div class="col-md-12 text-center">
                   
                <counter-visite-section/>
                    <p>Copyright © 2022 <span class="template-name">Mutuelle Santé Awoundjô</span>. Tout droits réservés. <!-- <a href="https://themeforest.net/user/epic-themes/portfolio?ref=Epic-Themes" target="_blank">Epic-Themes</a> --></p>
                    
                </div>
                <!--end col-md-6 -->
                
            </div>
            <!--end row -->
            
        </div>
        <!--end container -->
                
    </div>
    <!--end footer -->
    </div>
</template>

<script>
import CounterVisiteSection from '../components/CounterVisite.vue'
export default {
    name: 'FooterSection',
    components:{
        CounterVisiteSection
    }
   
    }
    

</script>