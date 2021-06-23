<template>
  <section>
	<div id="header" v-bind:style="{ backgroundColor: headerColor ? headerColor : 'steelblue'}">
		<h1>The Great <br>
			<span id="colorDisplay">{{pickedColor}}</span>
			<br>
			Juego de adivinanza de colores</h1>
	</div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: {
      pickedColor: String,
      headerColor: String
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    },

}


</script>

<style scoped lang="css">
#header {
	transition: all 0.3s;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
#colorDisplay {
	font-size: 200%;
}


</style>