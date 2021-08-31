<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 col-sm-12">
          <div class="wrapper_second_about">
            <div class="wrapper_first_image">
              <!-- <a href="index.html"
                ><img
                  src="/static/images/logo.png"
                  class="img-responsive"
                  alt="logo"
              /></a> -->
            </div>
            <p class="text-justify">
              Nous vous accompagnons de bout en bout, de l’acculturation de vos
              collaborateurs jusqu’à la mise en production de vos applications
              blockchain et vous conseillons pour vos projets liés aux actifs
              numériques.
            </p>
            <div class="counter-section">
              <div class="ft_about_icon float_left">
                <!-- <i class="flaticon-user"></i> -->
                <div class="ft_abt_text_wrapper">
                  <img  />
                  <img
                    :src="require(`~/assets/img/services/image-footer.png`)" 
                    height="150px" 
                    width="150px"
                    class="img-responsive"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-12 col-sm-4">
          <div class="wrapper_second_useful">
            <h4>Liens utiles</h4>

            <ul>
              <li>
                <a href="#"><i class="fa fa-angle-right"></i>Notre mission</a>
              </li>

              <li>
                <a href="#"
                  ><i class="fa fa-angle-right"></i>Qui sommes nous ?</a
                >
              </li>
              <li>
                <a href="#"><i class="fa fa-angle-right"></i>Nos convictions</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-angle-right"></i>Nos services</a>
                <ul class="s-service">
                  <li><i class="fa fa-angle-right"></i>Nos offres</li>
                  <li>
                    <i class="fa fa-angle-right"></i>Conferences et formations
                  </li>
                  <li>
                    <i class="fa fa-angle-right"></i>Conseils et développement
                  </li>
                  <li><i class="fa fa-angle-right"></i>Crypto-actifs</li>
                </ul>
              </li>
              <li>
                <a href="#"><i class="fa fa-angle-right"></i>Nos projets</a>
              </li>
              <li>
                <a href="#"><i class="fa fa-angle-right"></i>Blockchain</a>
                <ul class="s-service">
                  <li><i class="fa fa-angle-right"></i>Définition</li>
                  <li>
                    <i class="fa fa-angle-right"></i>Cas d'application
                  </li>
                  <li>
                    <i class="fa fa-angle-right"></i>Lexique
                  </li>
                  <!-- <li><i class="fa fa-angle-right"></i>Crypto-actifs</li> -->
                </ul>
              </li>
              <li>
                <a href="#"><i class="fa fa-angle-right"></i>Contactez-nous</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12 col-sm-12">
          <div class="wrapper_second_useful wrapper_second_useful_2">
            <h4>Contactez-nous</h4>
            <ul>
              <li>
                <a href="#"
                  ><i class="flaticon-mail"></i
                  >contact@wealthtechinnovations.com</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="flaticon-language"></i
                  >www.wealthtechinnovations.com</a
                >
              </li>
              <li>
                <i class="flaticon-placeholder"></i>Abidjan, cocody, riviera
                palmeraie Immeuble Gold Africa Côte d'ivoire
              </li>
            </ul>
          </div>
        </div>
        <hr class="w-100" style="background-color: white" />
      </div>
    </div>
    <nav class="footer__navigation">
      <ul class="footer__navigation-list">
        <li class="footer__sm-links">
          <a
            target="_blank"
            href="https://www.facebook.com/wealthtechinnovations"
          >
            <svg
              class="icon-facebook"
              viewBox="0 0 42 42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path
                d="M0 21a21 21 0 1 1 42 0 21 21 0 0 1-42 0zm23.19 12.35V21.92h3.15l.42-3.93H23.2V16c0-1.02.1-1.57 1.58-1.57h1.97V10.5h-3.16c-3.78 0-5.12 1.91-5.12 5.12V18H16.1v3.93h2.36v11.43h4.73z"
                fill-rule="evenodd"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <!-- <a href="https://www.instagram.com/ma_tea_drink/?hl=de">
            <svg class="instagram" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path
                d="M0 21a21 21 0 1 1 42 0 21 21 0 0 1-42 0zM21 9.8c-3.04 0-3.42.01-4.62.07-1.19.05-2 .24-2.72.52-.73.28-1.36.67-1.98 1.29a5.5 5.5 0 0 0-1.3 1.98 8.18 8.18 0 0 0-.51 2.72c-.06 1.2-.07 1.58-.07 4.62s.01 3.42.07 4.62c.05 1.19.24 2 .52 2.72.28.73.67 1.36 1.29 1.98.62.62 1.25 1 1.98 1.3.72.27 1.53.46 2.72.51 1.2.06 1.58.07 4.62.07s3.42-.01 4.62-.07c1.19-.05 2-.24 2.72-.52a5.48 5.48 0 0 0 1.98-1.29 5.5 5.5 0 0 0 1.3-1.98 8.3 8.3 0 0 0 .51-2.72c.06-1.2.07-1.58.07-4.62s-.01-3.42-.07-4.62a8.3 8.3 0 0 0-.52-2.72 5.5 5.5 0 0 0-1.3-1.98c-.61-.62-1.24-1-1.97-1.3a8.24 8.24 0 0 0-2.72-.51c-1.2-.06-1.58-.07-4.62-.07zm-1 2.02h1c3 0 3.35 0 4.53.06a6.2 6.2 0 0 1 2.08.39c.52.2.9.44 1.28.84.4.39.64.76.84 1.28.15.4.34 1 .39 2.08.05 1.18.06 1.54.06 4.53s0 3.34-.06 4.52a6.2 6.2 0 0 1-.39 2.08c-.2.52-.44.9-.84 1.29-.39.39-.76.63-1.28.84-.4.15-1 .33-2.08.38-1.18.05-1.54.07-4.53.07s-3.34-.02-4.52-.07a6.21 6.21 0 0 1-2.08-.38c-.53-.2-.9-.45-1.3-.84-.38-.4-.63-.77-.83-1.29-.15-.4-.34-.99-.39-2.08a78.3 78.3 0 0 1-.06-4.53c0-2.99.01-3.34.06-4.52a6.2 6.2 0 0 1 .39-2.08c.2-.52.45-.9.84-1.29.39-.39.76-.63 1.29-.84.39-.15.98-.33 2.08-.38 1.03-.05 1.43-.06 3.52-.06zm6.98 1.86a1.34 1.34 0 1 0 0 2.69 1.34 1.34 0 0 0 0-2.7zM21 15.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5zm0 2.02a3.73 3.73 0 1 1 0 7.46 3.73 3.73 0 0 1 0-7.46z"
                fill-rule="evenodd"
                fill="currentColor"
              ></path>
            </svg>
          </a> -->
          <a target="_blank" href="https://twitter.com/Wealthtechinno?s=08">
            <svg
              class="twitter"
              viewBox="0 0 42 42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path
                d="M0 21a21 21 0 1 1 42 0 21 21 0 0 1-42 0zm21.37-2.93l.05.73-.74-.1c-2.67-.33-5-1.5-7-3.43l-.96-.97-.25.71a4.28 4.28 0 0 0 .91 4.4c.59.62.46.7-.56.33-.35-.11-.66-.2-.69-.16-.1.1.25 1.45.53 1.99a4.74 4.74 0 0 0 2.01 1.9l.72.34-.85.01c-.82 0-.85.02-.76.33.3.96 1.45 1.99 2.74 2.43l.91.31-.79.48a8.27 8.27 0 0 1-3.94 1.1c-.66 0-1.2.07-1.2.11 0 .15 1.8.98 2.83 1.3 3.13.97 6.85.56 9.64-1.09a12.9 12.9 0 0 0 4.9-5.75c.5-1.2 1-3.4 1-4.45 0-.68.04-.77.86-1.59.48-.47.94-1 1.03-1.14.14-.28.13-.28-.62-.03-1.25.44-1.43.39-.8-.28.45-.48.99-1.34.99-1.59 0-.04-.22.03-.47.16a8.2 8.2 0 0 1-1.3.5l-.79.26-.72-.49c-.4-.27-.95-.56-1.24-.65-.75-.2-1.9-.18-2.57.06-1.84.67-3 2.39-2.87 4.27z"
                fill-rule="evenodd"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <span> </span>
        </li>
        <li>
          <span>
            © wealthtech Innovations 2020
            <!-- <a href="#" target="_blank">wit</a> -->
          </span>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: fsl;
}

.wrapper_second_useful ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.wrapper_second_links {
  padding-top: 75px;
  float: left;
}
.wrapper_second_useful ul li {
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
}
.wrapper_second_useful ul li a {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  text-transform: capitalize;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.wrapper_second_useful ul li a {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  text-transform: capitalize;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.wrapper_second_useful ul li i {
  color: rgba(255, 255, 255, 0.9);
  margin-right: 10px;
  font-size: 14px;
}
ul.s-service {
  margin-left: 25px;
}

.footer__navigation {
  margin: 0 auto;
  padding: 4em 1em 3em;
  max-width: 69em;
  line-height: 1;
}
.footer__navigation-list {
  font-size: 0.875em;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  /* justify-content: center; */
  align-items: center;
}
@media screen and (min-width: 69em) {
  .footer__navigation-list {
    justify-content: space-between;
  }
}
.footer__navigation-list {
  font-size: 0.875em;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  justify-content: center;
  align-items: center;
}
ul {
  /* display: block;
    list-style-type: disc; */
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.footer__sm-links svg {
  width: 3em;
  height: 3em;
}
svg:not(:root) {
  overflow: hidden;
}
.footer__navigation-list li {
  margin: 0 1em 1em;
}

.footer__sm-links {
  white-space: nowrap;
}
.footer__navigation-list a {
  color: #fff;
  text-decoration: none;
  transition: color 0.5s ease-out;
}
.footer__navigation-list li {
  margin: 0 1em 1em;
}

.facebook {
  color: #4267b2;
}
.twitter {
  color: #1da1f2;
}
.instagram {
  color: #8a3ab9;
}
@media screen and (max-width: 540px) {
  .ft_abt_text_wrapper{
    display: flex;
    justify-content: center;
  }
  .wrapper_second_useful>h4{
    text-align: center;
  }
  .wrapper_second_useful.wrapper_second_useful_2>h4{
    text-align: center;
  }
  ul>li{
    text-align: center;
  }
}
</style>