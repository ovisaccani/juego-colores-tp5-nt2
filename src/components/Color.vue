<template>
  <section>
	<div id="container">
		<div class="square" v-for="(color, index) in colors" :key="color" v-bind:style="{backgroundColor:color}" v-on:click="$emit('select-color', index)"></div>
	</div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-color',
    props: {
		colors: Array,
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

.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;
	cursor: pointer;
}

#container {
	margin: 20px auto;
	max-width: 600px;
}

</style>