<template>
    <div>
            
                             <div class="">
                        <div class="alert alert-danger" v-if="formErrors.length > 0">
                            <ul>
                                <li v-for="(error,id) in formErrors" v-bind:key="id"> * {{error}} </li>
                            </ul>
                        </div>
                    </div>                   
                
                    <p class="blockquote-left">Vous êtes une entreprise ou une communauté de minimum 10 personnes,  faites une demande de devis en appelant le service client:  </p>


                            <div class="alert  alert-info text-center">
                                <strong > 01 71 72 16 68 </strong><br>
                                
                                <strong >  ou en nous écrivant via l'adresse mail suivant : contact@mutuelleawoundjo.com avec en objet demande de devis</strong>
                            </div>
                            
                            <form ref="form" @submit.prevent="sendEmail">

                                 <div class="form-group">
                            <label>Message</label>
                            <textarea name="message" class="form-control"  id="floatingTextarea" v-model="message" ></textarea>
                            
                    </div>
                             <button class="btn btn-primary" type="submit">Envoyer</button>
                            </form>
                          
                           
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
export default {
    name: 'SimulerDevisDeuxSection',
    data(){
        return{
            formErrors: [],
            
            message:null,
        }
    },
    methods:{
           validateForm(){

            //alert("Validate form");

            this.formErrors = [];

            if(!this.message){
                this.formErrors.push(' Veuillez ecrire un message')
            }
           
        },

        sendEmail() {

            this.validateForm();

            //alert(this.formErrors);

            if(this.formErrors.length <= 0){

                emailjs.sendForm('service_l5zckzw', 'template_2oyox7c', this.$refs.form, '9ZGAkazpy2T1q5N_H')
                .then((result) => {
                    Swal.fire({
                        title: "Message envoyé avec succès",
                        text: "Merci pour votre message",
                        icon: "success",
                        button: "OK",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            document.location.reload(true);              
                        }
                    });
                }, (error) => {
                    console.log('FAILED...', error.text);
                });

            }else{
                this.formErrors = this.formErrors;

                 Swal.fire({
                        title: "Erreur",
                        text: "Ecriver votre mesage",
                        icon: "warning",
                        button: "OK",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            document.location.reload(true);
                        }
                    });

                
            }
        },   
    }
   
}
</script>