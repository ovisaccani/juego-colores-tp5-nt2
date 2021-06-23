<template>
  <div id="app">
    <Juego/>
  </div> 
</template>

<script>
import Juego from './components/juego.vue'

export default {
  name: 'App',
  components: {
    Juego,
  }
}
</script>

<style>

  #app {

  }

  body {
	background: #000000;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;
  font-size: 2em;
}


</style>
