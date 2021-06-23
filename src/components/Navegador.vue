<template>
  <section>
    <div id="navegador">
        <button id="reset" v-on:click="$emit('reset')">{{resetMessage}}</button>
        <span id="message">{{messageDisplay}}</span>
        <button id="easy" v-bind:class="{ selected: !isHard }" v-on:click="$emit('change-difficulty', false)">easy</button>
        <button id="hard" v-bind:class="{ selected: isHard }" v-on:click="$emit('change-difficulty', true)">hard</button>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navegador',
    props: {
		isHard: Boolean,
		messageDisplay: String,
		resetMessage: String
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
#navegador {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -32px;

}

#reset {
	cursor: pointer;
}

#message {
	color: #06005f;
	display: inline-block;
	width: 20%;
}

#messageBox {
	background-color: steelblue;

	
}
.selected {
	background-color: steelblue;
	color: white;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}

</style>