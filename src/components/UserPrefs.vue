<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="reset" @click="resetColors" :style="buttonColors">reset</button>
    <h2>Choose your style prefs:</h2>
    <ul>
      <li>
        <label for="bg-color">Background color</label>
        <input type="color" id="bg-color" :value="colors.backgroundColor" @change="changeBackgroundColor"/>
      </li>
      <li>
        <label for="txt-color">Text color</label>
        <input type="color" id="txt-color" :value="colors.color" @change="changeColor"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user-prefs',
  data() {
    return {
      msg: 'Choose your colors:'
    }
  },
  computed: {
    buttonColors() {
      return {
        color: this.$store.state.colors.backgroundColor,
        backgroundColor: this.$store.state.colors.color
      }
    },
    colors() {
      return this.$store.state.colors
    }
  },
  methods: {
    changeBackgroundColor(e) {
      this.$store.commit('changeBackgroundColor', e.target.value)
    },
    changeColor(e) {
      this.$store.commit('changeColor', e.target.value)
    },
    resetColors () {
      this.$store.commit('resetColors')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.reset {
  height: 46px;
  width: 100px;
  outline: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
}
</style>
