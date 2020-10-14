<template>
  <div>
    <b-row  style="height: auto; bottom: 0; background-color: #e9f6fc" align-h="center" class="pt-5 footer">
      <b-col xl="9" lg="10" md="12" sm="12" cols="12" style="text-align: center">
        <p>{{ $t('app.disclaimer') }}
          <br />Developed by
          <span id="myLinkedIn" @click="linkedIn()">{{ $t('app.name') }}</span>
        </p>
      </b-col>
    </b-row> 

  </div>
</template>

<script>
export default {
methods: {
    linkedIn() {
      window.open("https://www.linkedin.com/in/uros-dimitrijevic-9b50b8194/");
    }
  }
}
</script>

<style scoped>
.footer{
  margin-bottom: 0 !important;
}
p{
  font-size: 13.6px;
  color: #777777;
  line-height: 1.7;
  text-align: center;
}
#myLinkedIn {
  cursor: pointer;
} 
span{
    font-weight: bold;
    
}

</style>