<template>
  <div class="wrapper">
    <b-row  class="first" style="height: auto;" align-h="center">
      <b-col xl="8" >
        <b-card >
          <b-card-title> 
            <h1>{{ $t('about.title') }}</h1>
            <br>
          </b-card-title>
          <b-card-text  class="second"><p>{{ $t('about.fisrt-section') }}</p></b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row  class="second" style="height: auto;" align-h="center">
      <b-col xl="8">
        <b-card>
          <b-card-title> 
            <h2>{{ $t('about.title2') }}</h2>
          </b-card-title>
          <b-card-text><p>{{ $t('about.second-section') }}</p></b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row  class="third" style="height: auto;" align-h="center">
      <b-col xl="8">
        <b-card>
          <b-card-title> 
            <h2>{{ $t('about.title3') }}</h2>
          </b-card-title>
          <b-card-text>
            <p>{{ $t('about.third-section') }}</p>
            <ul id="ul-first">
              <li>{{ $t('about.li1') }}</li>
              <li>{{ $t('about.li2') }}</li>
              <li>{{ $t('about.li3') }}</li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row  class="fourth" style="height: auto;" align-h="center">
      <b-col xl="8">
        <b-card>
          <b-card-title> 
            <h2>{{ $t('about.title4') }}</h2>
          </b-card-title>
          <b-card-text>         
            <ul>
              <li>{{ $t('about.li111') }}</li>
              <li>{{ $t('about.li11') }}</li>
              <li>{{ $t('about.li12') }}</li>
              <li>{{ $t('about.li13') }}</li>
              <li>{{ $t('about.li14') }}</li>
              <li>{{ $t('about.li15') }}</li>
              <li>{{ $t('about.li16') }}</li>
              <li>{{ $t('about.li17') }}</li>
              <li>{{ $t('about.li18') }}</li>
              <li>{{ $t('about.li19') }}</li>
            </ul>
            <br />
            <p>{{ $t('about.fifth-section') }} </p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>


  </div>
</template>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  /* justify-content: center; ? ! ?  */
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.about div {
  margin-top: 15px;
}
h1 {
  margin-top: 30px;
  font-size: 30px;
  color: #29aae1;
}
h2 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333333;
}
p {
  font-size: 16px;
  line-height: 1.5;
}
ul {
  list-style-position: inside;
  padding: 0;
}
ul li {
  margin-bottom: 10px;
  
  font-size: 16px;
}
#ul-first {
  margin-top: 10px;
}
.fourth {
  margin-bottom: 80px;
}
.card-body {
  padding-left: 0 !important;
  padding-right: 0 !important;
  
}
.card{
  border: none;
}

.wrapper {
  margin-top: 71px;
  margin-bottom: 50px;
}

</style>
