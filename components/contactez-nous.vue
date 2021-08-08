<template>
  <div class="write-us pt-4 pb-4">
    <h3 class="title" id="contactez_nous">Nous contactez</h3>
    <hr class="hr" />
    <form
      class="write-us__form"
      id="new_contact_us_form"
      action="/contact"
      accept-charset="UTF-8"
      method="post"
    >
      <input name="utf8" type="hidden" value="✓" /><input
        type="hidden"
        name="authenticity_token"
        value="qZiXcmmHpbifjaK1JmVV+WzjfGMimF2AD3eR3HQV8jNYnvZVJD0aPg06BaBEyQRcOpXHIiHkL8ETbPl962IQEw=="
      />
      <div class="input-columns">
        <div class="input-group">
          <input
            required="required"
            class="placehold"
            id="name"
            type="text"
            name="contact_us_form[name]"
          />
          <label for="contact_us_form_name">Nom</label>
        </div>
        <div class="input-group">
          <input
            required="required"
            id="mail"
            class="placehold"
            type="text"
            name="contact_us_form[email]"
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
          name="contact_us_form[message]"
        ></textarea>
        <label for="contact_us_form_message">Contenu du message</label>
      </div>
      <div class="input-checkbox">
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
      </div>
      <!-- <script src="https://www.recaptcha.net/recaptcha/api.js?render=6LfzsswUAAAAAFxhwUJK8yhjMlxp_wjnpDXKorBl"></script> -->
      <!-- <script>
        // Define function so that we can call it again later if we need to reset it
        // This executes reCAPTCHA and then calls our callback.
        function executeRecaptchaForContact() {
          grecaptcha.ready(function () {
            grecaptcha
              .execute("6LfzsswUAAAAAFxhwUJK8yhjMlxp_wjnpDXKorBl", {
                action: "contact",
              })
              .then(function (token) {
                setInputWithRecaptchaResponseTokenForContact(
                  "g-recaptcha-response-data-contact",
                  token
                );
              });
          });
        }
        // Invoke immediately
        executeRecaptchaForContact();

        // Async variant so you can await this function from another async function (no need for
        // an explicit callback function then!)
        // Returns a Promise that resolves with the response token.
        async function executeRecaptchaForContactAsync() {
          return new Promise((resolve, reject) => {
            grecaptcha.ready(async function () {
              resolve(
                await grecaptcha.execute(
                  "6LfzsswUAAAAAFxhwUJK8yhjMlxp_wjnpDXKorBl",
                  { action: "contact" }
                )
              );
            });
          });
        }

        var setInputWithRecaptchaResponseTokenForContact = function (
          id,
          token
        ) {
          var element = document.getElementById(id);
          element.value = token;
        };
      </script> -->
      <!-- <input
        type="hidden"
        name="g-recaptcha-response-data[contact]"
        id="g-recaptcha-response-data-contact"
        data-sitekey="6LfzsswUAAAAAFxhwUJK8yhjMlxp_wjnpDXKorBl"
        class="g-recaptcha g-recaptcha-response"
        style=""
        value="03AGdBq27DqdZrEyS1AAIYLoeDO5REjTYSFFOO6Qh6O1WA7ultjA289au5tKszAH7IcEU5lFUDzAKzdqsDcelMhNcifRXC8it9a0efF6ddaR1JPGGd3N-LvIytVg-mtDUY0f-ucotiD9TkWSARALto1CM49hztcaC9JUKqjLpJLIBL7YTxJGxyc1nE0h8z1Cui2_XeS17RJJl48LtCiO7CUEmLE1R_vGwkLdkqnzYMDBC8ECtx08kJgx0juwcnPN_5WA_nww-T-9bQw8iGd5WRZBtknnh5fDTybYtUvAZx5j93yeCzsbnp1WAkDkTrcLFxER3aFgGF5nfPcK8Y1FFI6nSkit6M5CEyOI9BjrcdnTJRINH7ERD0pGHHvEfmX16qPOG0BqRoriql9lGWzsVLcTjDCU5oikb2myWSEWm45xAUe7GivNQXqOgM2Ghg0QUkZ7YRR9tfK-8c"
      /> -->

      <button name="button" type="submit" class="submit">
        Envoyer le message
      </button>
    </form>
  </div>
</template>

<script>
export default {};
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
  display: grid;
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
@media screen and (min-width: 375px){
  .title {
    font-size: 40px;
  }
  .p.btn-body-text {
    text-align: center;
  }
}
</style>