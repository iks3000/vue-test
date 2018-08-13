<template>
    <div class="contact-us-block">
        <div class="contact-us-block__wrapper">
            <div>
                <h2 class="contact-us-block__title">Contact Us</h2>

                <form @submit="checkForm" action="http://httpbin.org/post" method="post" novalidate="true">
                    <p v-if="errors.length">
                        <b>Please correct these errors:</b>
                        <ul>
                            <li class="error" v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>

                    <p class="contact-us-block__wrap" @click="activate(1)" :class="{ active : active_el == 1 }">
                        <label class="contact-us-block__label" for="name">Name</label>
                        <input class="contact-us-block__input" id="name" v-model="name" type="text" name="name">
                    </p>

                    <p class="contact-us-block__wrap" @click="activate(2)" :class="{ active : active_el == 2 }">
                        <label class="contact-us-block__label" for="phone">Phone</label>
                        <input class="contact-us-block__input" id="phone" v-model="phone" type="tel" name="phone" size="20">
                    </p>

                    <p class="contact-us-block__wrap" @click="activate(3)" :class="{ active : active_el == 3 }">
                        <label class="contact-us-block__label" for="email">E-mail</label>
                        <input class="contact-us-block__input" id="email" v-model="email" type="email" name="email">
                    </p>

                    <p class="contact-us-block__checkbox" @click="activate(4)" :class="{ active : active_el == 4 }">
                        <input type="checkbox" id="checkbox" v-model="checkbox">
                        <label for="checkbox">I agree the processing of personal data</label>
                    </p>

                    <input class="contact-us-block__btn" type="submit" value="Get in touch">


                </form>

            </div>

            <p class="contact-us-block__text">Please tell us more about your request and give us info about your<br>company and country</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactUs',
        data () {
            return {
                errors: [],
                name: null,
                phone: null,
                email: null,
                checkbox: null,

                active_el: 0
            }
        },
        methods: {
            checkForm: function (e) {
                this.errors = [];
                if (!this.name) {
                    this.errors.push('Please enter a name.');
                }
                if (!this.phone) {
                    this.errors.push('Enter phone number.');
                } else if (!this.validPhone(this.phone)) {
                    this.errors.push('Please enter a valid phone number.');
                }
                if (!this.email) {
                    this.errors.push('Enter your email.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Please enter a valid email address.');
                }
                if(!this.checkbox) {
                    this.errors.push('Check Checkbox.');
                }
                if (!this.errors.length) {
                    return true;
                }
                e.preventDefault();
            },

            validEmail: function (email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },

            validPhone: function(phone){
                let re = /[0-9]/;
                return re.test(phone);
            },

            activate: function(el){
                this.active_el = el;
            }
        }
    }




</script>

