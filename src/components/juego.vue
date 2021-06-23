<template>
  <section>
    <Header
      v-bind:picked-color="pickedColor"
      v-bind:header-color="headerColor"
    />

    <Navegador
      v-bind:is-hard="isHard"
      v-on:change-difficulty="changeDifficulty"
      v-on:reset="reset"
      v-bind:reset-message="resetMessage"
      v-bind:message-display="messageDisplay"
    />

    <Color
      v-bind:colors="colors"
      v-on:select-color="selectColor"
    />
  </section>
</template>

<script lang="js">

  import Header from './Header.vue'
  import Navegador from './Navegador.vue'
  import Color from './Color.vue'

  export default  {
    name: 'src-components-juego',
    props: [],
    created() {
      this.start();
    },
    mounted () {

    },
    data () {
      return {
        colors: [],
        isHard: true,
        pickedColor: "",
        messageDisplay: "",
        resetMessage: "New Colors",
        headerColor: "",
      }
    },
    methods: {
      randomInt(){
        return Math.floor(Math.random() * 256);
      },
      getRandomColor() {
        return "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")"
      },
      pickColor(){
        return Math.floor(Math.random() * (this.isHard ? 6 : 3));
      },
      fillColors(){
        this.colors = [];
        let quantity = this.isHard ? 6 : 3;
        for (let i = 0; i < quantity; i++) {
          this.colors.push(this.getRandomColor());
        }
      },
      changeDifficulty(isHard) {
        this.isHard = isHard;
        this.reset();
      },
      setAllColorsTo(){
        for (let i = 0; i < this.colors.length; i++) {
          this.colors[i] = this.pickedColor;
        }
      },
      selectColor(indexColor) {
        if (this.colors[indexColor] == this.pickedColor){
          this.messageDisplay = "You Picked Right!";
          this.setAllColorsTo();
          this.headerColor = this.pickedColor;
          this.restartMessage = "Play Again!";
        } else {
          this.messageDisplay = "Try Again!"
          this.colors[indexColor] = "#000000";
        }
      },
      reset() {
        this.restartMessage = "New Colors"
        this.messageDisplay = "";
        this.headerColor = "",
        this.start();
      },
      start() {
        this.fillColors();
        this.pickedColor = this.colors[this.pickColor()];
      }
    },
    computed: {

    },
    components: {
      Header,
      Navegador,
      Color,
    }
}


</script>

<style scoped lang="css">

</style>
