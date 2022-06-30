<template>
    <div>
        <div class="alert alert-info">
            <strong class="">Profitez d'une offre individuelle ou familiale incluant les parents et 3 enfants. </strong>
        </div>
             <div class="form-group">
                <div class="alert alert-success">
                    <strong> Votre prise en charge est estimée à :</strong>
                    
                        <li> <strong> {{montantMois}} Fcfa le mois </strong> </li>
                        <li> <strong> {{montantTrimestre}} Fcfa le trimestre </strong> </li>
                        <li> <strong> {{montantAnnee}} Fcfa l'année </strong> </li>
                    
                </div>
            </div>
             <div class="">
                        <div class="alert alert-danger" v-if="formErrors.length >0">
                            <ul>
                                <li v-for="(error,id) in formErrors" v-bind:key="id"> * {{error}} </li>
                            </ul>
                        </div>
                    </div>

        <form ref="form" @submit.prevent="sendEmail"> 
            <div class="row">
                <div class="col">
                        
                    <div class="form-group">
                        <label> Nom et Prénom</label>
                        <input name="name" type="text" class="form-control" v-model="name" /> 
                    </div>
                    <div class="form-group">
                        <label> Numéro de téléphone</label>
                        <input name="contact" type="number" class="form-control"  v-model="contact"/> 
                    </div>
                      <div class="form-group">
                        <label> Adresse email</label>
                        <input name="email" type="email" class="form-control" v-model="email" /> 
                    </div>
                    <div class="form-group">
                        <label for=""> Choisissez votre formule</label>
                        <select class="form-control" v-model="formule">
                            <option value="" selected> ---</option>
                            <option value="famille">Famille</option>
                            <option value="individuelle"> Personne Individuelle</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                            <div class="form-group">
                        <label for=""> Choisissez votre taux de couverture</label>
                        <select class="form-control" v-model="couverture">
                            <option value="" selected> --- </option>
                            <option value="70">70%</option>
                            <option value="80"> 80%</option>
                            <option value="100"> 100%</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for=""> Quel Age avez-vous ?</label>
                        <select  class="form-control" v-model="primeAge">
                            <option value="0" selected> --- </option>
                            <option value="0">Entre 21 et 50 ans</option>
                            <option value="15">Entre 50 et 55 ans</option>
                            <option value="27"> Entre 56 et 60 ans</option>
                            <option value="35"> Entre 61 et 65 ans</option>
                            <option value="55"> Entre 66 et 70 ans</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Avez-vous des pathologies ?</label>
                        <input class="form-control " min="0" max="50" type="number"  placeholder="Exp. 2" v-model="pathologie"/>     
                    </div>
                </div>
                
            </div>

        
                <div class="form-group">
                    <label>
                        Ajouter des enfants supplémentaires ?
                    </label>
                    <input type="number" class="form-control" placeholder="Exp. 3" v-model="enfant" />
                </div>
            
           
               
               
        </form >
                  <button class="btn btn-primary"  type="submit" @click="calcul">Envoyer</button>
                    
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
    name: 'SimulerDevisUnSection',
    data(){
        return{

            formErrors: [],
            
            name: null,
            contact: null,
            email:null,
            
            montantMois: 0,
            montantTrimestre: 0,
            montantAnnee:0,
            montant:0,
            

            formule: '',
            couverture:'',
            primeAge:0,
            pathologie:0,
            enfant:0,

        }
    },
    methods:{
         

        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        validContact(contact){
            var re = /^\d{10}$/  /* /^[\+]?[(]?[0-9]{0}[)]?[-\s\.]?[0-9]{10}[-\s\.]?[0-9]{4,6}$/g */
            return re.test(contact);
        },
        validName(name){
            var re = /^[a-z A-Z\-]+$/;
            return re.test(name);
        },

        validateForm(){

            //alert("Validate form");

            this.formErrors = [];

            if(!this.name){
                this.formErrors.push(' veuillez définir le nom et le prenom')
            } else if (!this.validName(this.name)) {
                this.formErrors.push('veuillez entrer un nom valide');
            }
            
            if(!this.contact){
                this.formErrors.push('veuillez ajouter un contact svp')
            } else if (!this.validContact(this.contact)) {
               /*  alert('saisir numéro de 10 chiffres'); */
            }

            
            if (!this.email) {
                this.formErrors.push('veuillez ecrire le mail.');
            } else if (!this.validEmail(this.email)) {
                this.fromErrors.push('Veuillez ecrire un mail valide');
            }

                    
        },

          

        calcul(){
             

                this.validateForm();

                if(this.formErrors.length <=0){

                         switch (this.formule) {
                case 'individuelle':
                    if(this.couverture == '70'){
                        this.montant= 5500;
                    }else if(this.couverture=='80'){
                        this.montant= 13000;
                    }else if(this.couverture== '100'){
                        this.montant= 25000;
                    }
                    
                    break;

                case 'famille':
                      if(this.couverture == '70'){
                        this.montant=15000;
                        }else if(this.couverture=='80'){
                            this.montant= 35000;
                        }else if(this.couverture== '100'){
                            this.montant= 75000;
                        }
                    
                    break;
            
                default:
                    break;
            }
                        
                }else{
                this.formErrors = this.formErrors;
                }

                
            //formule et couverture

           

            //prime age*
            this.montant = this.montant + ( (this.montant *  parseInt(this.primeAge)) / 100);
        
            //prime pathologique
            this.montant = this.montant + (parseInt(this.pathologie)  * 10000);

            // enfants
            this.montant = this.montant + (parseInt(this.enfant) * 2000);
            
            if(!isNaN(this.montant)){

                this.montantMois= this.montant;

                this.montantTrimestre = this.montant * 3 ;
                
                this.montantAnnee = this.montant * 12 ; 
            }else{
                this.montant = 0;
                this.montantMois= 0;
                this.montantTrimestre = 0;    
                this.montantAnnee = 0 ; 
                this.primeAge = 0;
                this.pathologie=0;
                this.enfant=0;
            }  
            
                    this.sendEmail();
        },
             sendEmail() {
                                    this.validateForm();
                                    if(this.formErrors.length <=0){
                     emailjs.sendForm('service_l5zckzw', 'template_2oyox7c', this.$refs.form, '9ZGAkazpy2T1q5N_H')
                    .then((result) => {
                        console.log('SUCCESS!', result.text);
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    });
             }else {
                 this.formErrors = this.formErrors;
             }},
    },
    
   
      
}

</script>