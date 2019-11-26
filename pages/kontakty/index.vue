<template lang="pug">
.container.max-w-md.pb-12.pt-24(class="md:pb-16 md:pt-32")
  .mb-10.text-center(class="md:mb-12")
    h1 {{ mainHeading }}
    .max-w-sm.mx-auto
      p {{ subHeading }}
  .w-full.max-w-sm.mx-auto
    form.bg-white.shadow.p-6.rounded(@submit="validateFinal"
      id="contactForm" method="POST")
      //- Full name
      .mb-6(:class="{ 'invalid': $v.fullName.$error }")
        label.label.mb-2(for="fullName") {{ labels.fullName }}
        input(name="fullName" v-model.trim="$v.fullName.$model"
          class="input input-grey md:text-xl" type="text" maxlength="100"
          :placeholder="placeholders.fullName")
        p.invalid-hint(v-if="$v.fullName.$error") {{ hints.fullNameRequired }}

      //- Email
      .mb-6(:class="{ 'invalid': $v.email.$error }")
        label.label.mb-2(for="_replyto") {{ labels.email }}
        input(name="_replyto" v-model.lazy.trim="$v.email.$model"
          class="input input-grey md:text-xl" type="text" maxlength="100"
          :placeholder="placeholders.email")
        p.invalid-hint(v-if="!$v.email.required && $v.email.$dirty")
          | {{ hints.emailRequired }}
        p.invalid-hint(v-if="!$v.email.email") {{ hints.emailInvalid }}

      //- Message
      .mb-6(:class="{ 'invalid': $v.message.$error }")
        label.label.mb-2(for="message") {{ labels.message }}
        textarea(name="message" v-model.trim="$v.message.$model"
          class="input input-grey md:text-xl" cols="30" rows="10"
          maxlength="3000" :placeholder="placeholders.message")
        p.invalid-hint(v-if="$v.message.$error") {{ hints.messageRequired }}

      //- Submit Button
      div(class="sm:flex sm:items-center")
        button.btn.btn-blue(class="sm:mr-3") {{ labels.button }}
        p.mt-4.invalid-hint(v-if="formHasErrors"
          class="sm:mt-0") {{ hints.correctHighlightedFields }}

      //- Hidden Formspree Fields
      div
        input(name="_subject" type="hidden"
          value="[bibliya.net.ua] New Contact Request")
        input#ccEmails(name="_cc" type="hidden")
        input(name="_next" type="hidden" value="/kontakty/diakuiemo/")
        input(name="_language" type="hidden" value="uk")
        input(name="_gotcha" type="text" style="display:none")
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      title: 'Контакти',
      baseTitle: 'Біблія понад усе — безплатний курс дистанційного навчання',
      mainHeading: 'Зв\'яжіться з нами',
      subHeading: `Маєте запитання? Напишіть нам повідомлення! Ми постараємось
                  відповісти якнайшвидше.`,
      fullName: '',
      email: '',
      message: '',
      formHasErrors: false,
      labels: {
        fullName: 'Ім\'я та прізвище',
        email: 'Електронна скринька',
        message: 'Ваше повідомлення',
        button: 'Надіслати',
      },
      placeholders: {
        fullName: 'Петро Тимошенко',
        email: 'petro@tymoshenko.ua',
        message: 'Слухаємо уважно...',
      },
      hints: {
        fullNameRequired: 'Вкажіть ім\'я та прізвище.',
        emailRequired: 'Вкажіть електронну скриньку.',
        emailInvalid: 'Вкажіть дійсну електронну скриньку.',
        messageRequired: 'Будь ласка, введіть повідомлення.',
        correctHighlightedFields: 'Будь ласка, виправте виділені поля.',
      },
    };
  },
  mounted() {
    this.setFormAction();
    this.setCcAddresses();
  },
  methods: {
    setFormAction() {
      const contactForm = document.getElementById('contactForm');
      const segments = ['https://formspree.io/', 'info', '@', 'euroteamoutreach', '.', 'org'];
      contactForm.setAttribute('action', segments.join(''));
    },
    setCcAddresses() {
      const ccEmails = document.getElementById('ccEmails');
      const nathan = ['nathan', '@', 'euroteamoutreach', '.', 'org'];
      const serhii = ['serhii', '@', 'euroteamoutreach', '.', 'org'];
      ccEmails.setAttribute('value', `${nathan.join('')},${serhii.join('')}`);
    },
    validateFinal(e) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.formHasErrors = true;
        e.preventDefault();
      }
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | ${this.baseTitle}`,
        },
      ],
    };
  },
  validations: {
    fullName: {
      required,
    },
    email: {
      required,
      email,
    },
    message: {
      required,
    },
  },
};
</script>
