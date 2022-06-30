<template>
   <section class="animate__animated animate__zoomIn">
        <partenaire-section/>
         <form-section/>
        
        <div>
              
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-3">
                        <div class="alert alert-success text-center py-4">
                            <strong> <a href="https://commerciaux.mutuelleawoundjo.com">DELEGUE</a> </strong>
                        </div>
                    </div>
                    <div class="col-md-3">
                         <div class="alert alert-success text-center py-4">
                            <strong> <a href="https://distributeurs.mutuelleawoundjo.com" >DISTRIBUTEUR</a> </strong>
                        </div>
                    </div>
                    <div class="col-md-3">
                         <div class="alert alert-success text-center py-4">
                            <strong> <a href="https://commerciaux.mutuelleawoundjo.com">APPORTEUR</a> </strong>
                        </div>
                    </div>
                    <div class="col-md-3">
                         <div class="alert alert-success text-center py-4">
                            <strong> <a href="https://officines.mutuelleawoundjo.com" >OFFICINES</a> </strong>
                        </div>
                    </div>
                </div>
                  
                <div class="row">
                    <div class="col-md-6 mx-auto">

                         
                            
                         <div class="form-group text-center">
                            <a href="mailto:contact@mutuelleawoundjo.com" class="btn-red small scrool  w-100" @click="calcul"> Laisser nous un message. </a>                            
                         </div>
                              
                    </div>
                </div>
            </div>
        </div>    

                 
   </section>
</template>




<script>


import PartenaireSection from '../components/Partenaire.vue';
import FormSection from '../components/Form.vue';
export default {
    name:'FormPartenaireSection',
    components:{
        PartenaireSection,
        FormSection,
    },
    methods:{
        lien(){
            window.open ('https://compte.mutuelleawoundjo.com');
        }
    }
    
}
</script>