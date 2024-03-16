<script>
import { RouterLink, RouterView } from 'vue-router'
import router from './router';
import { initFlowbite } from 'flowbite';



export default {
  mounted() {
      initFlowbite();
  }
}

</script>

<template>


  <RouterView />
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900,700,500);
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&family=Montserrat:wght@500&display=swap');

#app {

  max-width: 100vw;
  box-sizing: border-box;
  margin: 0px;

  font-family: 'Montserrat', sans-serif;
}
</style>