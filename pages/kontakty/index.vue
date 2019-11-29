<template>
  <div class="container max-w-md pb-12 pt-24 md:pb-16 md:pt-32">
    <div class="mb-10 text-center md:mb-12">
      <h1>{{ mainHeading }}</h1>
      <div class="max-w-sm mx-auto">
        <p>{{ subHeading }}</p>
      </div>
    </div>
    <div class="w-full max-w-sm mx-auto">
      <form id="contactForm"
            class="bg-white shadow p-6 rounded"
            method="POST"
            @submit="validateFinal"
      >
        <div class="mb-6" :class="{ 'invalid': $v.fullName.$error }">
          <label class="label mb-2" for="fullName">{{ labels.fullName }}</label>
          <input v-model.trim="$v.fullName.$model"
                 class="input input-grey md:text-xl"
                 name="fullName"
                 type="text"
                 maxlength="100"
                 :placeholder="placeholders.fullName"
          >
          <p v-if="$v.fullName.$error"
             class="invalid-hint"
          >
            {{ hints.fullNameRequired }}
          </p>
        </div>
        <div class="mb-6" :class="{ 'invalid': $v.email.$error }">
          <label class="label mb-2" for="_replyto">{{ labels.email }}</label>
          <input v-model.lazy.trim="$v.email.$model"
                 class="input input-grey md:text-xl"
                 name="_replyto"
                 type="text"
                 maxlength="100"
                 :placeholder="placeholders.email"
          >
          <p v-if="!$v.email.required &amp;&amp; $v.email.$dirty"
             class="invalid-hint"
          >
            {{ hints.emailRequired }}
          </p>
          <p v-if="!$v.email.email" class="invalid-hint">
            {{ hints.emailInvalid }}
          </p>
        </div>
        <div class="mb-6" :class="{ 'invalid': $v.message.$error }">
          <label class="label mb-2" for="message">{{ labels.message }}</label>
          <textarea v-model.trim="$v.message.$model"
                    class="input input-grey md:text-xl"
                    name="message"
                    cols="30"
                    rows="10"
                    maxlength="3000"
                    :placeholder="placeholders.message"
          />
          <p
            v-if="$v.message.$error"
            class="invalid-hint"
          >
            {{ hints.messageRequired }}
          </p>
        </div>
        <div class="sm:flex sm:items-center">
          <button class="btn btn-blue sm:mr-3">
            {{ labels.button }}
          </button>
          <p v-if="formHasErrors" class="mt-4 invalid-hint sm:mt-0">
            {{ hints.correctHighlightedFields }}
          </p>
        </div>
        <div>
          <input name="_subject"
                 type="hidden"
                 value="[bibliya.net.ua] New Contact Request"
          >
          <input id="ccEmails"
                 name="_cc"
                 type="hidden"
          >
          <input name="_next"
                 type="hidden"
                 value="/kontakty/diakuiemo/"
          >
          <input name="_language"
                 type="hidden"
                 value="uk"
          >
          <input name="_gotcha"
                 type="text"
                 style="display: none;"
          >
        </div>
      </form>
    </div>
  </div>
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
