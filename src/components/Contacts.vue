<template>
    <div class="contacts-block">
        <h1 class="contacts-block__title">Contacts</h1>

        <div class="contacts-block__wrapper">
            <div class="block">
                <h2 class="block__title">
                    <span class="block__title_color">GMS</span> Headquarters
                </h2>
                <div class="block__wrapper">
                    <div>
                        <p class="block__text-1">Global Message Services Ukraine LLC</p>
                        <p class="block__text-1">Bundesstrasse 5 | 3rd Floor</p>
                        <p class="block__text-1">6300 Zug</p>
                        <p class="block__text-1">Switzerland</p>
                        <p class="block__phone">
                            <a :href="`tel:${ phone }`">{{ phone }}</a>
                        </p>
                    </div>
                    <div>
                        <p class="block__info-contacts-name">Email</p>
                        <p class="block__info-contacts-definition">
                            <a :href="`mailto:${ email }`">{{ email }}</a>
                        </p>

                        <p class="block__info-contacts-name">Send message</p>
                        <p class="block__info-contacts-definition">{{ viber }}</p>
                        <p class="block__info-contacts-name">Send form</p>
                        <p class="block__info-contacts-definition">{{ contactUs }}</p>
                    </div>
                </div>
            </div>

            <div class="block">
                <h2 class="block__title">
                    Technical support <span class="block__title_color">24/7</span>
                </h2>
                <p class="block__text-1">GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
                <p class="block__phone">
                    <a :href="`tel:${ phone }`">{{ phone }}</a>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Contacts',
        data () {
            return {
                phone: '+41 41 544 62 00',
                email: 'INFO@GMS-WORLDWIDE.COM',
                viber: 'VIBER US',
                contactUs: 'CONTACT US'
            }
        }
    }
</script>