<template>
  <div id="app" >
    <b-container fluid >
      
      <b-navbar toggleable="lg" type="dark" variant="white" fixed="top" 
      style="border-bottom: 1.5px solid rgba(41,170,225, 0.5)">
        <b-navbar-brand href="#" >
          <div id="images_" >
            <!-- img -->
            <img
              fluid-grow
              src="./assets/grb.png"
              alt="Grb Srbije"
              class="d-inline-block align-top"
              id="grb"
              
            > 
          
            <img
            fluid-grow
              src="./assets/logo-srb.png"
              alt="Fondacija Ana i Vlade Divac"
              class="d-inline-block align-top"
              id="divac"
             
            />
            <div style="display: inline-block">
            <img
            fluid-grow
              src="./assets/Headline.jpg"
              alt="FOTO_Fondacija Ana i Vlade Divac - Ana Košel, Slavica Đukić Dejanović, Mateja Norčič Štamcar, Tina Aničić"
              class="d-inline-block align-top"
              id="eu"
              
            />
            </div>
          </div>
          <!-- end img -->
        </b-navbar-brand>
      
      
        <!-- button nav -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav right>
              <b-nav-item>
                <b-link to="/" class="text-decoration-none">{{ $t('nav.home') }}</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link to="/about" class="text-decoration-none">{{ $t('nav.about') }}</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link to="/news" class="text-decoration-none">{{ $t('nav.news') }}</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link to="/publications" class="text-decoration-none">{{ $t('nav.publications') }}</b-link>
              </b-nav-item>
            </b-navbar-nav>
            <select v-model="$i18n.locale" style="height: 27px">       
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>
       <!-- end navbar-->

      <router-view />
  
      <Footer />
    </b-container>
     
  </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  },
  name: "locale-changer",
  data() {
    
    return { 

      langs: {
        "srb": "srb",
        "eng": "eng",
        "ћир": "cir"
      }
    };
  },
  
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.navbar-brand{
  padding: 0 0 0 0 !important;
}
#grb{
  width: 55px;
  height: 55px;
}
#divac{
  width: 120px; 
  height: 55px;
}
#eu{
  width: 350px;
  height: 55px;
}
 .container-fluid{
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.row{
  margin-left: 0 !important;
  margin-right: 0 !important;
}  

 a.router-link-exact-active {
  background-color: #1c144f;
  color: white !important;
  text-decoration: none;
}  
 .navbar a {
  font-weight: bold;
  color: #2c3e50;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  font-size: 14px;
}
.navbar-toggler {
  border-color: #1c144f !important;
}
.navbar-toggler-icon {
  background-color: #1c144f !important;
} 

 #app {
  font-family: "Exo 2", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  } 
  /***************nav bar Mobile*/
  @media only screen and (min-width: 320px) and (max-width: 355px) {
  #images_{
    width: auto;
  }
  .navbar {
   padding-left: 6px !important;
   padding-right: 6px !important;
   min-height: 71px;
  }
  #grb{
    width: 27px;
    height: 22.5px;
  }
  #divac{
    width: 59px; 
    height: 22.5px;
  }
  #eu{
    width: 150px;
    height: 22.5px;
  } 

}

  @media only screen and (min-width: 356px) and (max-width: 450px) {
  #images_{
    width: auto;
  }
  .navbar {
   padding-left: 10px !important;
   padding-right: 10px !important;
   min-height: 71px;
  }
  #grb{
    width: 28px;
    height: 22.5px;
  }
  #divac{
    width: 60px; 
    height: 22.5px;
  }
  #eu{
    width: 175px;
    height: 22.5px;
  } 
}

  @media only screen and (min-device-width: 450px) and (max-device-width: 630px) {
  #images_{
    width: auto;
  }
  .navbar {
   padding-left: 10px !important;
   padding-right: 10px !important;
   min-height: 71px;
  }
  #grb{
    width: 30px;
    height: 30px;
  }
  #divac{
    width: 80px; 
    height: 30px;
  }
  #eu{
    width: 200px;
    height: 30px;
  } 
}


</style> 