

<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
</template>



<script>
import emailjs from '@emailjs/browser';

export default {
    name:'EssaiEmailSection',
  methods: {
    sendEmail() {
      emailjs.sendForm('service_c5sbq1i', 'template_7akh68m', this.$refs.form, '8iNGy3rdzCbkScqPv')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>



/*  sendEmail() {
      emailjs.sendForm('service_l5zckzw', 'template_2oyox7c', this.$refs.form, '9ZGAkazpy2T1q5N_H')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },
    } */