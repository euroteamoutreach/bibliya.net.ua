<template lang="pug">
.container.max-w-md.pb-12.pt-24(class="md:pb-16 md:pt-32")
  .mb-10.text-center(class="md:mb-16")
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
        input(name="_format" type="hidden" value="plain")
        input(name="_language" type="hidden" value="uk")
        input(name="_gotcha" type="text" style="display:none")
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
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
        button: 'Надіслати'
      },
      placeholders: {
        fullName: 'Петро Тимошенко',
        email: 'petro@tymoshenko.ua',
        message: 'Слухаємо уважно...'
      },
      hints: {
        fullNameRequired: 'Вкажіть ім\'я та прізвище.',
        emailRequired: 'Вкажіть електронну скриньку.',
        emailInvalid: 'Вкажіть дійсну електронну скриньку.',
        messageRequired: 'Будь ласка, введіть повідомлення.',
        correctHighlightedFields: 'Будь ласка, виправте виділені поля.'
      }
    }
  },
  head () {
    return {
      title: 'Контакти | Біблія понад усе'
    }
  },
  beforeMount () {
    this.$nuxt.$emit('navUpdate', 'opaque')
  },
  mounted () {
    this.setFormAction()
    this.setCcAddresses()
  },
  methods: {
    setFormAction () {
      let contactForm = document.getElementById('contactForm')
      let segments = ['https://formspree.io/', 'info', '@', 'euroteamoutreach', '.', 'org']
      contactForm.setAttribute('action', segments.join(''))
    },
    setCcAddresses () {
      let ccEmails = document.getElementById('ccEmails')
      let denise = ['hutchisondenise', '@', 'gmail', '.', 'com']
      let nathan = ['nathan', '@', 'euroteamoutreach', '.', 'org']
      ccEmails.setAttribute('value', `${denise.join('')},${nathan.join('')}`)
    },
    validateFinal (e) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.formHasErrors = true
        e.preventDefault()
      } else {
        return true
      }
    }
  },
  validations: {
    fullName: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  }
}
</script>
