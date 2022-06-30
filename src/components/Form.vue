/* <template>
    <div>
        
       <div class="container">
             <form class="mb-3 mt-3 " ref="form" @submit.prevent="sendEmail" >     
          
            <div class="row">
                <div class="mx-auto col-md-5">

                    <div class="">
                        <div class="alert alert-danger" v-if="formErrors.length > 0">
                            <ul>
                                <li v-for="(error,id) in formErrors" v-bind:key="id"> * {{error}} </li>
                            </ul>
                        </div>
                    </div>

                    <div class="form-group">
                        <label > Nom et Prénom</label>
                        <input name="name" type="name" class="form-control" v-model.trim="name" /> 
                         <div class="invalid-feedback">
                            Please enter a message in the textarea.
                            </div>
                    </div>
                    <div class="form-group">
                        <label> Contact</label>
                        <input name="contact" type="tel" class="form-control"  v-model.number="contact" /> 
                    </div>
                    <div class="form-group">
                        <label  for=""> Option de partenariat</label>
                        <select name="select" class="form-control" v-model="select" >
                            <option value="" selected> ---</option>
                            <option value="">Delegue</option>
                            <option value=""> Distributeur</option>
                            <option value=""> Apporteur</option>
                            <option value=""> Officines</option>
                        </select>
                    </div>
                       <div class="form-group">
                        <label> Email</label>
                        <input name="email"  class="form-control" v-model="email" /> 
                    </div> <br>

                    <div class="form-group">
                            <label>Message</label>
                            <textarea name="message" class="form-control"  id="floatingTextarea" v-model="message" ></textarea>
                            
                    </div>
                          
                            <button class="btn btn-primary"  type="submit">Envoyer</button>
                     
                </div>  
                
            </div>   
        </form>
            <modal-section/>
       </div>
    </div>
</template>


<script>
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
export default {

    name:'FormSection',
    components:{
        
    },
    
    data(){
        return {
            formErrors: [],
           
            name: null,
            contact: null,
            select:null,
            email:null,
            message:null,
            maxChars:10,
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
               /*  this.errors.push('saisir numéro de 10 chiffres'); */
            }

            if(!this.message){
                this.formErrors.push(' Veuillez ecrire un message')
            }
            if (!this.email) {
                this.formErors.push('veuillez ecrire le mail.');
            } else if (!this.validEmail(this.email)) {
                this.formErrors.push('Veuillez ecrire un mail valide');
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
                        text: "Tous les champs sont obligatoires",
                        icon: "warning",
                        button: "OK",
                    }).then((result) => {
                        if (result.isConfirmed) {
                                          
                        }
                    });

                
            }
        },   
            
    }
}
    
</script> 