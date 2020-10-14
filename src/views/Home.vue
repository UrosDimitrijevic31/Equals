<template>
  <div class="wrapper" fluid>
    <b-row fluid class="mb-5 pattern" style="height: 275px"> </b-row>

    <b-row
      cols-sm="1"
      align-h="center"
      style="height: auto"
      class="container1 mb-5"
    >
      <b-col lg="4" class="border-right">
        <div>
          <b-card>
            <b-card-title>
              <h2>{{ $t("home.title-left") }}</h2>
            </b-card-title>
            <b-card-text>
              <p>{{ $t("home.left-section") }}</p>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-col lg="4">
        <div>
          <b-card>
            <b-card-title>
              <h2>{{ $t("home.title-right") }}</h2>
            </b-card-title>
            <b-card-text>
              <ol>
                <li>{{ $t("home.li1") }}</li>
                <li>{{ $t("home.li2") }}</li>
                <li>{{ $t("home.li3") }}</li>
                <li>{{ $t("home.li4") }}</li>
                <li>{{ $t("home.li5") }}</li>
                <li>{{ $t("home.li6") }}</li>
                <li>{{ $t("home.li7") }}</li>
                <li>{{ $t("home.li8") }}</li>
              </ol>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>

    <b-row style="height: auto" id="news_" class="mb-3 text-center">
      <b-col>{{ $t("home.news") }}</b-col>
    </b-row>
    <!--NEWS -->
    <!-- <h3>{{ $t('home.second-title') }}</h3>  -->

    <!-- prirucnici -->
    <b-row align-h="center" style="height: auto" class="mb-5 mt-4">
      <b-col cols lg="3" class="mb-4 publication mt-4">
        <a
          href="/Prirucnik Poslodavci Divac 210_225 Dva Web.pdf"
          target="_blank"
        >
          <b-img
            :src="require('../assets/korice4.jpg')"
            fluid-grow
            alt="Fluid-grow image"
          ></b-img>
        </a>
      </b-col>

      <b-col cols lg="3" class="mb-4 mt-4 publication">
        <a href="/Prirucnik za zaposlene.pdf" target="_blank">
          <b-img
            :src="require('../assets/korice1.jpg')"
            fluid-grow
            alt="Fluid-grow image"
          ></b-img>
        </a>
      </b-col>
    </b-row>

    <!-- VIDEO -->
    <b-row
      align-h="center"
      class="mb-5 video"
      style="margin-top: 60px; margin-bottom: 60px"
    >
      <b-col xl="5">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/sGusdLS-Mts"
          allowfullscreen
        >
        </b-embed>
      </b-col>
    </b-row>

    <!-- VEST -->
    <b-row align-h="center" class="mt-5">
      <b-col cols lg="5" class="mb-4">
        <b-img
          :src="require('../assets/vest32.jpg')"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
      </b-col>

      <b-col cols lg="4" class="news_text1">
        <b-card class="newsText">
          <b-card-title class="newsTitle">{{
            $t('news.title3')
          }}</b-card-title>
          <b-card-text>
            <p>
              {{ $t('news.section3') }}
              <br />
              <router-link to="/news">{{ $t("home.read-more") }}</router-link>
            </p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <!-- Img placeholder-->
    <b-row fluid style="height: 230px" class="mt-5 patternDown"></b-row>

    <!-- Founders-->
    <b-row align-h="center" class="text-center mt-5" style="height: auto">
      <b-col lg="2" md="4" sm="8" class="founders-cards" align-self="center">
        <b-img
          fluid
          :src="require('../assets/grb.png')"
          alt="Logo Fondacije Ana i Vlade Divac"
          @click="gotToFond()"
        ></b-img>
      </b-col>
      <b-col lg="2" md="4" sm="8" class="founders-cards" align-self="center">
        <b-img
          fluid
          :src="require('../assets/logo-srb1.png')"
          alt="Logo Fondacije Ana i Vlade Divac"
          @click="gotToFond()"
        ></b-img>
      </b-col>
      <b-col lg="4" md="4" sm="10" class="founders-cards" align-self="center">
        <b-img
          fluid
          :src="require('../assets/eu-logo.png')"
          alt="Logo Evropske Unije"
          @click="goToEu()"
        ></b-img>
      </b-col>
    </b-row>
    <!-- Contact-->
    <b-row align-h="around" style="height: auto" id="contact">
      <b-col xl="4" lg="10" md="10" class="my-3">
        <h5>{{ $t("home.contact-left") }}</h5>
        <p>
          T: +381 11 2140 318
          <br />Bulevar Mihajla Pupina 2a <br />11070 Beograd
        </p>
      </b-col>
      <b-col xl="3" lg="10" md="10" class="my-3">
        <h5>{{ $t("home.contact-right") }}</h5>
        <p>
          T: +381 11 3341 755
          <br />Ilije Garašanina 53a/7 <br />11120 Beograd
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  methods: {
    goToNews() {
      this.$router.push({
        name: "News",
      });
    },

    goToMns() {
      window.open("http://www.mdpp.gov.rs");
    },
    gotToFond() {
      window.open("http://www.divac.com");
    },
    goToEu() {
      window.open("https://ec.europa.eu");
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 71px;
}
.col-lg-4 {
  margin-left: 16px !important;
}
.news_text1.col-lg-4 {
  margin-left: 0 !important;
}
.border-right {
  border-color: #29aae1 !important;
  border-width: 1.5px !important;
}
.publication {
  border: 1px solid #29aae1;
  border-width: 1.5px !important;
  margin-left: 15px;
  margin-right: 15px;
}
ol {
  margin: 0;
  padding: 0;
  list-style-position: inside;
}

ol li {
  padding: 0;
}

.card-body {
  padding: 0 !important;
}
.newsText p {
  color: #333333;
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.7;
}
.newsTitle {
  font-weight: bold;
  color: black;
  font-size: 16px;
  margin-bottom: 7px;
  font-style: normal;
}
.founders-cards > img {
  margin: 10px;
  filter: grayscale(100%);
}

.founders-cards > img:hover {
  filter: grayscale(0);
  cursor: pointer;
}

h2 {
  color: #29aae1;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 300;
  font-style: normal;
}

#news_ {
  color: #5c5c5c;
  font-size: 35px;
  font-weight: normal;
  font-style: normal;
}

.container1 p {
  font-style: normal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  box-sizing: border-box;
  color: #5c5c5c;
  line-height: 1.7;
  font-size: 16px;
}
/**************CONTACT************/
#contact {
  height: 250px;
  background-color: #fafafa;
  margin-top: 60px;
  margin-bottom: 90px;
}

#contact h5 {
  font-size: 0.83em;
  margin-block-start: 2.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
#contact p {
  line-height: 1.7;
}

/*************PATTERN********************/
.pattern {
  background: url("../assets/patern275.png");
  background-repeat: repeat;
}
.patternDown {
  background: url("../assets/patern230.png");
  background-repeat: repeat;
}

.video{
  margin-bottom: 100px !important;
}
</style>
