<template>
  <div class="wrapper">

    <b-row fluid class="one_news" align-h="center" style="background-color: #1c144f; height: 165px;">
      <b-col  xl="10" lg="10" md="10" sm="12" cols="12" align-self="center" class="mt-2"  >
        <h3>{{$t('news.title3')}}</h3>
      </b-col>
    </b-row>

    <b-row  align-h="center" style="height: auto;" class="col1" >
      <b-col xl="7" sm="12" md="12" lg="12" >
        <p>
                       {{$t('oneNews3.p1')}}
          <br /><br /> {{$t('oneNews3.p2')}}
          </p>

      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto;" class="mt-2 mb-5">
      <b-col xl="7">
        <b-img :src="require('../assets/vest31.jpg')" fluid-grow alt="Fluid-grow image"></b-img>  
      </b-col>
    </b-row>
   <b-row align-h="center" class="mb-5">
      <b-col xl="1">
        <button @click="back()" >←{{$t('news.back')}}</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push({
        name: "News"
      });
    }
  }
};
</script>

<style scoped>

.wrapper {
  margin-top: 71px;
  height: auto;
}

.col1 p {
  font-size: 14px;
  color: #333333;
  line-height: 1.7;
  margin-bottom: 20px;
  margin-top: 20px;
}


.one_news h3{
  font-size: 22px;
  font-weight: normal;
  color: white;
  margin-top: 6px;
}

/* 
.news {
  width: 100%;
  height: 140px;
  color: white;
  background-color: #1c144f;
  display: flex;
}



button {
  font-size: 9px;
  color: #8c8c8c;
  background-color: white;
  border: none;
  padding: 2px 3px;
  text-align: center;
  cursor: pointer;
  border: 0.25px solid transparent;
}
button:hover {
  border: 0.5px solid #8c8c8c;
  border-radius: 4px;
  transition: 0.25s;
} */


</style>