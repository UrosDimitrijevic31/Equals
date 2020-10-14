<template>
  <div class="proba">

    <div class="news">
      <div class="header">
        <h3> {{$t('publication.title')}}</h3>
      </div>
    </div>
    <b-row style="height: auto;" class="mt-5">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
        <b-media>
          <template v-slot:aside>
              <a href="/Prirucnik Poslodavci Divac 210_225 Dva Web.pdf" target="_blank">
              <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
            </a>  
          </template>
          <p class="mb-0">
            Prirucnik Poslodavci Divac 210_225 Dva Web
          </p>
        </b-media>
       </b-col>
    </b-row>
    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
        <b-media>
          <template v-slot:aside>
              <a href="/Prirucnik za zaposlene.pdf" target="_blank">
              <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
            </a>  
          </template>
          <p class="mb-0">
          Priručnik za zaposlene - usklađivanje radnog i porodičnog života
          </p>
        </b-media>
       </b-col>
    </b-row>
    <b-row style="height: auto;">
      <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
        <b-media>
          <template v-slot:aside>
            <a href="/Uskladjivanje rada i roditeljstva.pdf" target="_blank">
              <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
            </a>  
          </template>
          <p class="mb-0">
           Uskladjivanje rada i roditeljstva
          </p>
        </b-media>
      </b-col>
      
    </b-row>  

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
          <a href="/Challenges of work-life balance faced by working families.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
          Challenges of work-life balance faced by working families
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
          <a href="/fcd-polozaj-zena-na-trzistu-rada.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
          cd-polozaj-zena-na-trzistu-rada
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
           <a href="/fcd-radna-prava-su-nasa-prava-2019..pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
          fcd-radna-prava-su-nasa-prava-2019.
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
           <a href="/Gender budgeting.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Gender budgeting
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
             <a href="/Gender Equality Index 2017 EU.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Gender Equality Index 2017 EU
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
             <a href="/Gender Equality Index 2019. Work-life balance.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Gender Equality Index 2019. Work-life balance
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
             <a href="/Gender Equality Index for the Republic of Serbia 2016.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Gender Equality Index for the Republic of Serbia 2016
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
             <a href="/Gender planning.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Gender planning
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
             <a href="/Gender statistic and indicators.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Gender statistic and indicators
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
             <a href="/Gender-Analysis-Serbia-dec-2016.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Gender-Analysis-Serbia-dec-2016
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
            <a href="/Recnik_Rodne_Ravnopravnosti.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Recnik_Rodne_Ravnopravnosti
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
            <a href="/recnik.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Recnik rodne ravnopravnosti
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
            <a href="/recnik.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Recnik rodne ravnopravnosti
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
            <a href="/Reconciling work and life in the EU.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Reconciling work and life in the EU
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
            <a href="/strategija-rodna_ravnopravnost190_cyr.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        strategija-rodna_ravnopravnost190_cyr
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
            <a href="/Tackling the gender pay gap not without a better work life balance.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Tackling the gender pay gap not without a better work life balance
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
           <a href="/Work-life balance EC report.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Work-life balance EC report
        </p>
      </b-media>
       </b-col>
    </b-row>

    <b-row style="height: auto;">
       <b-col xl='6' lg="8" md="10" sm="12" cols="12" offset-xl="1" offset-lg="1"  offset-md="1">
      <b-media>
        <template v-slot:aside>
            <a href="/Work-life balance for all Best practice examples from EU.pdf" target="_blank">
            <b-img :src="require('../assets/pdf-icon.png')" alt="pdf-icon" fluid-grow=""></b-img>
          </a>  
        </template>
        <p class="mb-0">
        Work-life balance for all Best practice examples from EU
        </p>
      </b-media>
       </b-col>
    </b-row>


  </div>
</template>

<script>
// import pdf from 'vue-pdf'
export default {};
</script>

<style>
.proba {
  margin-top: 70px;
}
.news {
  width: 100%;
  height: 140px;
  color: white;
  background-color: #1c144f;
  display: flex;
}
.header {
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 14%;
}
.header h3 {
  font-size: 24px;
  font-weight: normal;
  margin: auto;
}
.row {
  margin-bottom: 10px !important;
}

.row p {
  margin-bottom: 0;
}

</style>