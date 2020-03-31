<template>
  <div class="wrapper">

    <!-- <div class="news">
      <div class="header">
        <h3>{{$t('news.category')}}</h3>
      </div>
    </div> -->
    <b-row class="news" fluid>
      <b-col class="header"> 
        <h3>{{$t('news.category')}}</h3>
      </b-col>  
    </b-row>
    
    <b-row align-h="center" style="height: auto;" class="mt-5">
      <b-col cols lg="3" xl="3" style="margin-bottom: 20px;">
        <b-img :src="require('../assets/img.jpg')" fluid-grow alt="Fluid-grow image"
        ></b-img>
      </b-col>

      <b-col cols lg="8"  xl="5" class="col1">
        <b-card class="newsText">
          <b-card-title class="newsTitle">{{$t('news.title')}}</b-card-title>
          <b-card-text>
            <p>{{$t('news.section')}}</p>
           <button @click="read1()" >{{$t('news.read')}}→</button>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  methods: {
    read1() {
      this.$router.push({
        name: "OneNews"
      });
    }
  }
};
</script>

<style >
html{
  min-height: 100vh ;
}
.news {
  height: 140px;
  color: white;
  background-color: #1c144f; 
}

.header h3 {
  font-size: 24px;
  font-weight: normal;
  margin: auto;
}

.card-body {
  padding-top: 0 !important;
}

.card{
  border: none !important;
}

.newsTitle h5 {
  font-size: 23px;
  font-weight: normal;
  color: #333333;
  margin-bottom: 5px;
  margin-top: 0;
} 
.col1 p {
  font-size: 14px;
  color: #333333;
  line-height: 1.7;
  margin-top: 10px;
  margin-bottom: 20px;  
}
.col1{
  padding-left: 0 !important;
  padding-right: 0 !important;
}


button {
  font-size: px;
  color: #8c8c8c;
  background-color: white;
  border: none;
  padding: 4px 6px;
  text-align: center;
  cursor: pointer;
  border: 0.25px solid transparent;
}
button:hover {
  border: 0.5px solid #8c8c8c;
  border-radius: 4px;
  transition: 0.25s;
} 
.wrapper {
  margin-top: 71px;
} 
</style>