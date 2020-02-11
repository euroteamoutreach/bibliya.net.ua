<template>
  <div class="container max-w-2xl pt-24 pb-12 md:pb-16 md:pt-32">
    <div class="max-w-2xl mx-auto mb-10 text-justify md:mb-12">
      <div class="max-w-lg pl-3 mx-auto mb-6">
        <img src="~/assets/svg/bf-logo-full.svg">
      </div>
      <h2 class="text-center">
        {{ mainHeading }}
      </h2>
      <p>
        Щоб підписатися на безплатний курс дистанційного навчання
        <em class="whitespace-no-wrap">Біблія понад усе,</em> заповніть форму,
        подану нижче. Ви зможете скасувати реєстрацію в будь-яку мить,
        надіславши
        <nuxt-link to="/kontakty/">
          письмовий запит.
        </nuxt-link>
      </p>
      <p>
        Відправивши цю форму, ви отримаєте запрошення електронною поштою
        створити онлайн-акаунт. Це дозволить вам прочитати свої уроки та
        скласти тести в електронному вигляді. За бажанням, ви також можете
        отримувати паперові уроки звичайною поштою.
      </p>
    </div>
    <div class="w-full max-w-2xl mx-auto">
      <form id="bookRequestForm"
            class="p-6 bg-white rounded shadow"
            method="POST"
            @submit="validateFinal"
      >
        <div class="flex flex-wrap -mx-3 md:mb-6">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0"
               :class="{ 'invalid': $v.lastName.$error }"
          >
            <label class="mb-2 label" for="lastName">
              {{ labels.lastName }}
            </label>
            <input v-model.trim="$v.lastName.$model"
                   class="input input-grey md:text-xl"
                   name="lastName"
                   maxlength="100"
                   :placeholder="placeholders.lastName"
            >
            <p v-if="$v.lastName.$error"
               class="invalid-hint"
            >
              {{ hints.lastNameRequired }}
            </p>
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0"
               :class="{ 'invalid': $v.firstName.$error }"
          >
            <label class="mb-2 label" for="firstName">
              {{ labels.firstName }}
            </label>
            <input v-model.trim="$v.firstName.$model"
                   class="input input-grey md:text-xl"
                   name="firstName"
                   maxlength="100"
                   :placeholder="placeholders.firstName"
            >
            <p v-if="$v.firstName.$error"
               class="invalid-hint"
            >
              {{ hints.firstNameRequired }}
            </p>
          </div>
        </div>
        <div class="mb-6" :class="{ 'invalid': $v.email.$error }">
          <label class="mb-2 label" for="_replyto">{{ labels.email }}</label>
          <input v-model.lazy.trim="$v.email.$model"
                 class="input input-grey md:text-xl"
                 name="_replyto"
                 type="text"
                 maxlength="100"
                 :placeholder="placeholders.email"
          >
          <p v-if="!$v.email.required && $v.email.$dirty"
             class="invalid-hint"
          >
            {{ hints.emailRequired }}
          </p>
          <p v-if="!$v.email.email" class="invalid-hint">
            {{ hints.emailInvalid }}
          </p>
        </div>
        <div class="mb-6" :class="{ 'invalid': $v.address.$error }">
          <label class="mb-2 label" for="address">{{ labels.address }}</label>
          <input v-model.trim="$v.address.$model"
                 class="input input-grey md:text-xl"
                 name="address"
                 type="text"
                 maxlength="200"
                 :placeholder="placeholders.address"
          >
          <p v-if="$v.address.$error"
             class="invalid-hint"
          >
            {{ hints.addressRequired }}
          </p>
        </div>
        <div class="mb-6">
          <label class="mb-2 label" for="region">{{ labels.region }}</label>
          <input class="input input-grey md:text-xl"
                 name="region"
                 type="text"
                 maxlength="100"
          >
        </div>
        <div class="flex flex-wrap -mx-3 md:mb-6">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0"
               :class="{ 'invalid': $v.city.$error }"
          >
            <label class="mb-2 label" for="city">{{ labels.city }}</label>
            <input v-model.trim="$v.city.$model"
                   class="input input-grey md:text-xl"
                   name="city"
                   type="text"
                   maxlength="100"
                   :placeholder="placeholders.city"
            >
            <p v-if="$v.city.$error" class="invalid-hint">
              {{ hints.cityRequired }}
            </p>
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0"
               :class="{ 'invalid': $v.oblast.$error }"
          >
            <label class="mb-2 label" for="oblast">{{ labels.oblast }}</label>
            <div class="relative" :class="{ 'invalid': $v.oblast.$error }">
              <select v-model.trim="$v.oblast.$model"
                      class="input input-grey input-sel md:text-xl"
                      name="oblast"
              >
                <option value="">
                  {{ labels.choose }}
                </option>
                <option v-for="obl in oblasts"
                        :key="obl"
                        :value="obl"
                >
                  {{ obl }}
                </option>
              </select>
              <div class="select-chevron">
                <font-awesome-icon :icon="['far', 'angle-down']" />
              </div>
            </div>
            <p v-if="$v.oblast.$error" class="invalid-hint">
              {{ hints.oblastRequired }}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 md:mb-6">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0"
               :class="{ 'invalid': $v.postalCode.$error }"
          >
            <label class="mb-2 label" for="postalCode">
              {{ labels.postalCode }}
            </label>
            <input v-model.trim="$v.postalCode.$model"
                   class="input input-grey md:text-xl"
                   name="postalCode"
                   type="text"
                   maxlength="5"
                   :placeholder="placeholders.postalCode"
            >
            <p v-if="$v.postalCode.$error" class="invalid-hint">
              {{ hints.postalCodeRequired }}
            </p>
          </div>
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label class="mb-2 label" for="phone">{{ labels.phone }}</label>
            <input class="input input-grey md:text-xl"
                   name="phone"
                   type="text"
                   maxlength="20"
                   :placeholder="placeholders.phone"
            >
          </div>
        </div>
        <div class="mb-8">
          <p class="mb-3 label">
            {{ labels.lessonPrefs }}
          </p>
          <div class="inline-flex w-full mb-2">
            <input id="lessonPrefsYes"
                   class="mr-2"
                   type="radio"
                   name="wantPaperLessons"
                   value="Yes"
            >
            <label class="leading-tight" for="lessonPrefsYes">
              {{ labels.yesPaperLessons }}
            </label>
          </div>
          <div class="flex w-full mb-2">
            <input id="lessonPrefsNo"
                   class="mr-2"
                   type="radio"
                   name="wantPaperLessons"
                   value="No"
                   checked
            >
            <label class="leading-tight" for="lessonPrefsNo">
              {{ labels.noPaperLessons }}
            </label>
          </div>
        </div>
        <div class="py-4 mb-8 text-center border-t border-b">
          <p class="m-0 font-semibold leading-tight">
            {{ labels.shippingDisclaimer }}
          </p>
        </div>
        <div class="mb-6">
          <!-- eslint-disable vue/no-v-html -->
          <label class="mb-2 label"
                 for="referral"
                 v-html="labels.referral"
          />
          <!-- eslint-enable vue/no-v-html -->
          <textarea class="input input-grey md:text-xl"
                    name="referral"
                    cols="30"
                    rows="5"
                    maxlength="3000"
                    :placeholder="placeholders.referral"
          />
        </div>
        <div class="mb-6">
          <label class="mb-2 label" for="comments">{{ labels.comments }}</label>
          <textarea class="input input-grey md:text-xl"
                    name="comments"
                    cols="30"
                    rows="5"
                    maxlength="3000"
                    :placeholder="placeholders.comments"
          />
        </div>
        <div class="flex mb-6">
          <div class="mr-2">
            <span :class="{ 'invalid-checkbox': $v.terms.$error }">
              <input v-model.trim="$v.terms.$model"
                     name="terms"
                     type="checkbox"
                     :value="labels.terms.replace(/(<([^>]+)>)/ig,'')"
              >
            </span>
          </div>
          <div class="flex-1 pt-1">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="leading-tight text-grey-darker" v-html="labels.terms" />
            <p v-if="$v.terms.$error" class="invalid-hint">
              {{ hints.termsRequired }}
            </p>
          </div>
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
                 value="[bibliya.net.ua] New Enrollment Request"
          >
          <input id="ccEmails"
                 name="_cc"
                 type="hidden"
          >
          <input name="_next"
                 type="hidden"
                 value="/pidpysatysia/diakuiemo/"
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
import { required, email, helpers } from 'vuelidate/lib/validators';

const checked = helpers.withParams({ type: 'checked' }, (value) => !helpers.req(value) || value === true);

export default {
  data() {
    return {
      title: 'Реєстраційна форма',
      baseTitle: 'Біблія понад усе — безплатний курс дистанційного навчання',
      mainHeading: 'Реєстраційна форма',
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
        shippingDisclaimer: 'Надсилаємо паперові уроки тільки на адреси в межах України.',
        referral: 'Звідки Ви дізналися про <em>Біблія понад усе?</em>',
        comments: 'Коментарі',
        terms: 'Я розумію, що, подаючи цю форму, підписуюсь на курс дистанційного навчання <em>Біблія понад усе</em> від організації Euro Team Outreach, Inc. Я також розумію, що можу відмовитись від реєстрації в будь-який час, подавши письмовий запит.',
        button: 'Надіслати',
        choose: 'Виберіть...',
        lessonPrefs: 'Окрім онлайн-навчання, чи хотіли б ви отримувати фізичні копії уроків? Вони будуть надіслані звичайною поштою за вказаною вище адресою.',
        noPaperLessons: 'Ні, я навчатимусь лише в онлайн-форматі.',
        yesPaperLessons: 'Так, я хотів/ла би отримувати фізичні копії уроків.',
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
        comments: 'Може, Ви б хотіли щось додати?',
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
        termsRequired: `Будь ласка, поставте галочку у квадратику, щоб
                       зазначити, що Ви згодні з умовами.`,
        correctHighlightedFields: 'Будь ласка, виправте виділені поля.',
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
        'Чернігівська',
      ],
    };
  },
  mounted() {
    this.setFormAction();
    this.setCcAddresses();
  },
  methods: {
    setFormAction() {
      const bookRequestForm = document.getElementById('bookRequestForm');
      const segments = ['https://formspree.io/', 'info', '@', 'euroteamoutreach', '.', 'org'];
      bookRequestForm.setAttribute('action', segments.join(''));
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
    lastName: {
      required,
    },
    firstName: {
      required,
    },
    email: {
      required,
      email,
    },
    address: {
      required,
    },
    city: {
      required,
    },
    oblast: {
      required,
    },
    postalCode: {
      required,
    },
    terms: {
      checked,
    },
  },
};
</script>
