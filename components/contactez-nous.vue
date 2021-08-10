<template>
  <div class="write-us pt-4 pb-4">
    <h3 class="title">Nous contacter</h3>
    <!-- <hr class="hr" /> -->
    <p v-if="errors.length">
    <b style="color:white"></b>
    <ul style="color:red; list-style:none;">
      <li  v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
    <div class="d-flex objects flex-wrap">
      
      <div class="w-50 objects-content" v-for="object in objects" :key="object.id">
        <div class="form-check form-check-inline">
          <input
            required
            type="checkbox"
            class="form-check-input"
            :value="object.value"
            v-model="checkedName"
            :id="'check' + object.key"
          />
          <label
            class="form-check-label"
            :for="'check' + object.key"
            style="color: white"
            >{{ object.value }}</label
          >
        </div>
      </div>
    </div>
    <loader-send-mail v-if="loader" />
    <form
      class="write-us__form"
      id="new_contact_us_form"
      accept-charset="UTF-8"
      method="post"
      action="#"
      @submit.prevent="send"
    >
      <div class="input-columns">
        <div class="input-group">
          <input
            required="required"
            id="mail"
            class="placehold"
            type="email"
            v-model="email"
          />
          <label for="contact_us_form_email">E-Mail</label>
        </div>
      </div>
      <div class="input-group">
        <textarea
          required="required"
          id="message"
          class="placehold"
          data-gramm="false"
          spellcheck="false"
          v-model="content"
        ></textarea>
        <label for="contact_us_form_message"></label>
      </div>
      <!-- <div class="input-checkbox">
        <input
          name="contact_us_form[tos_accepted]"
          type="hidden"
          value="0"
        /><input
          required="required"
          class="custom-control-input"
          id="customCheck1"
          type="checkbox"
          value="1"
          name="contact_us_form[tos_accepted]"
        />
        <label class="custom-control-input" for="customCheck1"
          >J'ai lu la note sur la politique de confidentialité. J'accepte que
          mes coordonnées et mes questions soient conservées de manière
          permanente..</label
        >
      </div> -->
      <button name="button" type="submit" class="submit">
        Envoyer le message
      </button>
    </form>
  </div>
</template>

<script>
import LoaderSendMail from "./loader-send-mail.vue";
export default {
  components: {
    LoaderSendMail,
  },
  data() {
    return {
      loader: false,
      objects: [
        { id: 1, value: "Déploiement de projet blockchain" },

        { id: 2, value: "Information" },

        { id: 3, value: "Formation" },

        { id: 4, value: "Intervention" },

        { id: 5, value: "Partenariat" },

        { id: 6, value: "Découvrir les projets Wealthtech" },

        { id: 7, value: "Cryptos actifs" },

        { id: 8, value: "Autres" },
      ],
      checkedName: [],
      errors: [],
      email: "",
      content: "",
    };
  },
  methods: {
    async send(e) {
      this.errors = [];
      this.loader = true;

      if (!this.checkedName.length) {
        this.errors.push("Cocher les/l'objet de la requête!");
      }
      if (!this.email) {
        this.errors.push("Email requis.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Un email valide est requis.");
      }

      if (!this.errors.length) {
        try {
          const response = await this.$mail.send({
            from: this.email,
            subject: "DEPUIS LE SITE WEB: " + this.checkedName.join(", "),
            text: this.content,
          });
          this.email = "";
          this.checkedName = [];
          this.content = "";
        } catch (error) {
          console.log(error);
        }
      }
      this.loader = false;
      e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.write-us {
  text-align: center;
}

.title {
  max-width: none;
  margin-bottom: 2rem;
  margin-left: 0;
  opacity: 1;
  font-family: Spacegrotesk, sans-serif;
  color: #ffffff;
  font-size: 70px;
  line-height: 1.2em;
  font-weight: 700;
  text-align: center;
  padding-top: 20px;
}
h3 + .hr {
  margin-top: 0;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
.write-us__form .input-columns {
  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
.write-us__form .submit {
  display: block;
  background: transparent;
  color: rgb(255, 255, 255);
  text-decoration: none;
  border: 1px solid rgb(255, 255, 255);
  font-weight: 700;
  font-size: 1rem;
  padding: 0.3em 1.2em;
  margin: 1.5em auto;
  line-height: 2;
}
.write-us__form input.placehold,
.write-us__form textarea.placehold {
  width: 100%;
  background: none;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 1em;
  outline: 0;
  border: none;
  font-weight: 500;
  font-size: 0.875em;
  line-height: 1.285714286em;
}
.write-us__form .input-group {
  position: relative;
  overflow: hidden;
  margin-bottom: 1.25em;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 15%);
  background: #fff;
}
.write-us__form label {
  transition: background 0.2s, color 0.2s, top 0.4s, bottom 0.4s, right 0.2s,
    left 0.2s;
  position: absolute;
  color: #999;
  padding: 1em;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
.write-us__form input.placehold,
.write-us__form textarea.placehold {
  width: 100%;
  background: none;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 1em;
  outline: 0;
  border: none;
  font-weight: 500;
  font-size: 0.875em;
  line-height: 1.285714286em;
}
.write-us__form textarea {
  display: block;
  resize: vertical;
  height: 12.5em;
}
textarea {
  overflow: auto;
}

@media screen and (min-width: 25rem) {
  .write-us__form .submit {
    font-size: 1.25rem !important;
  }
}

@media screen and (min-width: 20rem) {
  .write-us__form .submit {
    font-size: calc(1rem + 0.25 * (100vw - 20rem) / 5);
  }
}
@media screen and (min-width: 25rem) {
  .submit {
    font-size: 1.25rem !important;
  }
}
@media screen and (min-width: 20rem) {
  .submit {
    font-size: calc(1rem + 0.25 * (100vw - 20rem) / 5) !important;
  }
}

.hr {
  display: inline-block;
  width: 3px;
  height: 2.5em;
  background: #3baa36;
  margin: 0.75em 1em 1.5em;
  border: none;
  box-sizing: content-box;
}
.write-us__form {
  text-align: left;
  margin: 0 auto 4em;
  max-width: 44.5em;
  padding: 0 1em;
}
.objects {
  text-align: left;
  margin: 0 auto 1em;
  max-width: 44.5em;
  padding: 0 1em;
}
@media screen and (min-width: 375px) {
  .title {
    font-size: 40px;
  }
  .p.btn-body-text {
    text-align: center;
  }
  
}
@media screen and (max-width: 375px) {
  .objects-content {
    width: 100% !important ;
  }
}
</style>