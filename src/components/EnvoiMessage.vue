<template>
    <div>
                     
        <section class="section-white" id="contact">

            <!--begin container-->
            <div class="container">

                <!--begin row-->
                <div class="row">

                    <!--begin col-md-6 -->
                    <div class="col-md-6 bottom-margins-images">

                        <h4>Ecrivez-nous</h4>

                        <!--begin success message -->
                        <p class="contact_success_box" style="display:none;">We received your message and you'll hear from us soon. Thank You!</p>
                        <!--end success message -->

                        <!--begin contact form -->
                        <form id="contact-form" class="contact" @submit.prevent="submit">

                            <input class="contact-input white-input" required="" name="contact_names" placeholder="Nom et Prenom" type="text">
                            <input class="contact-input white-input" required="" name="contact_email" placeholder="Adresse Email" type="email">

                            <input class="contact-input white-input" required="" name="contact_phone" placeholder="Numéro de téléphone" type="text" >

                            <textarea class="contact-commnent white-input" rows="2" cols="20" name="contact_message" placeholder="Votre Message..."></textarea>

                            <input value="Envoyer mon message" id="submit-button" class="contact-submit" type="submit">

                        </form>
                        <!--end contact form -->

                    </div>
                    <!--end col-md-6 -->

                    <!--begin col-md-6 -->
                    <div class="col-md-6 responsive-bottom-margins">

                        <h4>Comment nous trouver</h4>

                        <iframe class="contact-maps wow slideInRight" data-wow-delay="0.25s" style="visibility: visible; animation-delay: 0.25s; animation-name: slideInRight; border:0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335" width="600" height="370"  allowfullscreen=""></iframe>

                    </div>
                    <!--end col-md-6 -->

                </div>
                <!--end row-->

        </div>
        <!--end container-->

        </section>
    </div>
</template>

<script>
export default {
    name: 'EnvoiMessageSection'
}
</script>