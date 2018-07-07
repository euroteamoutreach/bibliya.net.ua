<template lang="pug">
.container.max-w-md.pb-12.pt-24(class="md:pb-16 md:pt-32")
  .mb-10.text-center(class="md:mb-16")
    .mb-10.max-w-md.mx-auto
      h1(v-html="mainHeading")
      p(v-html="subHeading")

  .w-full.max-w-md.mx-auto
    form.bg-white.shadow.p-6.rounded(@submit="validateFinal"
      id="bookRequestForm" method="POST")
      //- First/Last Name Group
      .flex.flex-wrap.-mx-3(class="md:mb-6")
        //- Last Name
        .w-full.px-3.mb-6(:class="{ 'invalid': $v.lastName.$error }"
          class="md:w-1/2 md:mb-0")
          label.label.mb-2(for="lastName") {{ labels.lastName }}
          input(name="lastName" v-model.trim="$v.lastName.$model"
            maxlength="100" :placeholder="placeholders.lastName"
            class="input input-grey md:text-xl")
          p.invalid-hint(v-if="$v.lastName.$error") {{ hints.lastNameRequired }}

        //- First Name
        .w-full.px-3.mb-6(:class="{ 'invalid': $v.firstName.$error }"
          class="md:w-1/2 md:mb-0")
          label.label.mb-2(for="firstName") {{ labels.firstName }}
          input(name="firstName" v-model.trim="$v.firstName.$model"
            maxlength="100" :placeholder="placeholders.firstName"
            class="input input-grey md:text-xl")
          p.invalid-hint(v-if="$v.firstName.$error")
            | {{ hints.firstNameRequired }}

      //- Email
      .mb-6(:class="{ 'invalid': $v.email.$error }")
        label.label.mb-2(for="_replyto") {{ labels.email }}
        input(name="_replyto" v-model.lazy.trim="$v.email.$model" type="text"
          maxlength="100" :placeholder="placeholders.email"
          class="input input-grey md:text-xl")
        p.invalid-hint(v-if="!$v.email.required && $v.email.$dirty")
          | {{ hints.emailRequired }}
        p.invalid-hint(v-if="!$v.email.email") {{ hints.emailInvalid }}

      //- Address
      .mb-6(:class="{ 'invalid': $v.address.$error }")
        label.label.mb-2(for="address") {{ labels.address }}
        input(name="address" v-model.trim="$v.address.$model" type="text"
          maxlength="200" :placeholder="placeholders.address"
          class="input input-grey md:text-xl")
        p.invalid-hint(v-if="$v.address.$error") {{ hints.addressRequired }}

      //- Region
      .mb-6
        label.label.mb-2(for="region") {{ labels.region }}
        input(name="region" type="text" maxlength="100"
          class="input input-grey md:text-xl")

      //- City/Oblast Group
      .flex.flex-wrap.-mx-3(class="md:mb-6")
        //- City
        .w-full.px-3.mb-6(:class="{ 'invalid': $v.city.$error }"
          class="md:w-1/2 md:mb-0")
          label.label.mb-2(for="city") {{ labels.city }}
          input(name="city" v-model.trim="$v.city.$model" type="text"
            maxlength="100" :placeholder="placeholders.city"
            class="input input-grey md:text-xl")
          p.invalid-hint(v-if="$v.city.$error") {{ hints.cityRequired }}

        //- Oblast
        .w-full.px-3.mb-6(:class="{ 'invalid': $v.oblast.$error }"
          class="md:w-1/2 md:mb-0")
          label.label.mb-2(for="oblast") {{ labels.oblast }}
          .relative(:class="{ 'invalid': $v.oblast.$error }")
            select(name="oblast" v-model.trim="$v.oblast.$model"
              class="input input-grey input-sel md:text-xl")
              option(value="") {{ labels.choose }}
              option(v-for="oblast in oblasts" :value="oblast") {{ oblast }}
            .select-chevron
              font-awesome-icon(:icon="['far', 'angle-down']")
          p.invalid-hint(v-if="$v.oblast.$error") {{ hints.oblastRequired }}

      //- Index/Phone Group
      .flex.flex-wrap.mb-4.-mx-3(class="md:mb-6")
        //- Index
        .w-full.px-3.mb-6(:class="{ 'invalid': $v.postalCode.$error }"
          class="md:w-1/2 md:mb-0")
          label.label.mb-2(for="postalCode") {{ labels.postalCode }}
          input(name="postalCode" v-model.trim="$v.postalCode.$model" type="text"
            maxlength="5" :placeholder="placeholders.postalCode"
            class="input input-grey md:text-xl")
          p.invalid-hint(v-if="$v.postalCode.$error")
            | {{ hints.postalCodeRequired }}

        //- Phone
        .w-full.px-3.mb-6(class="md:w-1/2 md:mb-0")
          label.label.mb-2(for="phone") {{ labels.phone }}
          input(name="phone" type="text" maxlength="20"
            :placeholder="placeholders.phone"
            class="input input-grey md:text-xl")

      //- How did you hear about Bible First?
      .mb-6
        label.label.mb-2(for="referral" v-html="labels.referral")
        textarea(name="referral" class="input input-grey md:text-xl" cols="30"
          rows="5" maxlength="3000" :placeholder="placeholders.referral")

      //- Any comments?
      .mb-6
        label.label.mb-2(for="comments") {{ labels.comments }}
        textarea(name="comments" class="input input-grey md:text-xl" cols="30"
          rows="5" maxlength="3000" :placeholder="placeholders.comments")

      //- Agree to terms
      .mb-6.flex
        .mr-2
          span(:class="{ 'invalid-checkbox': $v.terms.$error }")
            input(name="terms" v-model.trim="$v.terms.$model" type="checkbox"
              :value="labels.terms.replace(/(<([^>]+)>)/ig,'')")
        .flex-1.pt-1
          p.text-grey-darker.leading-tight(v-html="labels.terms")
          p.invalid-hint(v-if="$v.terms.$error") {{ hints.termsRequired }}

      //- Submit Button
      div(class="sm:flex sm:items-center")
        button.btn.btn-orange(class="sm:mr-3") {{ labels.button }}
        p.mt-4.invalid-hint(v-if="formHasErrors"
          class="sm:mt-0") {{ hints.correctHighlightedFields }}

      //- Hidden Formspree Fields
      div
        input(name="_subject" type="hidden"
          value="[dobroizlo.com.ua] New Book Request")
        input#ccEmails(name="_cc" type="hidden")
        input(name="_next" type="hidden" value="/zamovyty-knyzhku/diakuiemo/")
        input(name="_format" type="hidden" value="plain")
        input(name="_language" type="hidden" value="uk")
        input(name="_gotcha" type="text" style="display:none")
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
const checked = helpers.withParams({ type: 'checked' }, (value) =>
  !helpers.req(value) || value === true)

export default {
  data () {
    return {
      title: 'Заявка на отримання Добра і зла',
      baseTitle: 'Добро і зло — Біблія-комікс — Захопливий гостросюжетний роман',
      mainHeading: `Заявка на отримання<br><em>Добра і зла</em>`,
      subHeading: `Щоб отримати безплатний примірник <em>Добра і зла</em>, будь
                  ласка, заповніть форму, подану нижче. Обмеження — одна книжка
                  на родину.`,
      fillInForm: '1. Заповніть цю форму;',
      completeLesson: '2. Виконайте завдання Уроку 1;',
      getBook: '3. Отримайте <em>Добро і зло!</em>',
      lastName: '',
      firstName: '',
      email: '',
      address: '',
      city: '',
      oblast: '',
      postalCode: '',
      phone: '',
      terms: false,
      formHasErrors: false,
      labels: {
        lastName: 'Прізвище',
        firstName: 'Ім\'я',
        email: 'Електронна скринька',
        address: 'Адреса',
        region: 'Район',
        city: 'Місто',
        oblast: 'Область',
        postalCode: 'Індекс',
        phone: 'Телефон',
        referral: 'Звідки Ви дізналися про <em>Добро і зло?</em>',
        comments: 'Коментарі',
        terms: `Я розумію, що, подавши цю форму, я прошу записати мене на безплатний дистанційний навчальний курс <em>Біблія понад усе</em>. Я також розумію, що не отримаю свій безплатний примірник <em>Добра і зла</em>, поки не вишлю заповнену форму з відповідями на запитання до першого уроку курсу <em>Біблія понад усе</em>.`,
        button: 'Надіслати',
        choose: 'Виберіть...'
      },
      placeholders: {
        lastName: 'Тимошенко',
        firstName: 'Петро',
        email: 'petro@tymoshenko.ua',
        address: 'вул. Івана Франка 123, кв. 456',
        region: 'Район',
        city: 'м. Львів',
        postalCode: '79000',
        phone: '+38-099-123-45-67',
        referral: 'Розкажіть, будь ласка...',
        comments: 'Може, Ви б хотіли щось додати?'
      },
      hints: {
        lastNameRequired: 'Вкажіть прізвище.',
        firstNameRequired: 'Вкажіть ім\'я.',
        emailRequired: 'Вкажіть електронну скриньку.',
        emailInvalid: 'Вкажіть дійсну електронну скриньку.',
        addressRequired: 'Вкажіть адресу.',
        cityRequired: 'Вкажіть місто.',
        oblastRequired: 'Виберіть область.',
        postalCodeRequired: 'Вкажіть індекс.',
        termsRequired: 'Будь ласка, поставте галочку у квадратику, щоб зазначити, що Ви згодні з умовами.',
        correctHighlightedFields: 'Будь ласка, виправте виділені поля.'
      },
      oblasts: [
        'Вінницька',
        'Волинська',
        'Дніпропетровська',
        'Донецька',
        'Житомирська',
        'Закарпатська',
        'Запорізька',
        'Івано-Франківська',
        'Київська',
        'Кіровоградська',
        'Луганська',
        'Львівська',
        'Миколаївська',
        'Одеська',
        'Полтавська',
        'Рівненська',
        'Сумська',
        'Тернопільська',
        'Харківська',
        'Херсонська',
        'Хмельницька',
        'Черкаська',
        'Чернівецька',
        'Чернігівська'
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | ${this.baseTitle}`
        }
      ]
    }
  },
  mounted () {
    this.setFormAction()
    this.setCcAddresses()
  },
  methods: {
    setFormAction () {
      let bookRequestForm = document.getElementById('bookRequestForm')
      let segments = ['https://formspree.io/', 'info', '@', 'euroteamoutreach', '.', 'org']
      bookRequestForm.setAttribute('action', segments.join(''))
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
    lastName: {
      required
    },
    firstName: {
      required
    },
    email: {
      required,
      email
    },
    address: {
      required
    },
    city: {
      required
    },
    oblast: {
      required
    },
    postalCode: {
      required
    },
    terms: {
      checked
    }
  }
}
</script>
