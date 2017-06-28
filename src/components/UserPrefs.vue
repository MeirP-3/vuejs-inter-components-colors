<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="reset" @click="reset" :style="{backgroundColor: styleBus.color, color: styleBus.backgroundColor}">reset</button>
    <h2>Choose your style prefs:</h2>
    <ul>
      <li>
        <label for="bg-color">Background color</label>
        <input type="color" id="bg-color" :value="styleBus.backgroundColor" @change="bgColorChanged"/>
      </li>
      <li>
        <label for="txt-color">Text color</label>
        <input type="color" id="txt-color" :value="styleBus.color" @change="txtColorChanged"/>
      </li>
    </ul>
  </div>
</template>

<script>
import styleBus from '../services/styleBus.js'

export default {
  name: 'user-prefs',
  data () {
    return {
      msg: 'User prefferences',
      styleBus
    }
  },
  methods: {
    bgColorChanged(e) {
      styleBus.backgroundColor = e.target.value
      localStorage.setItem('colors', JSON.stringify(styleBus))
    },
    txtColorChanged(e) {
      styleBus.color = e.target.value
      localStorage.setItem('colors', JSON.stringify(styleBus))
    },
    reset () {
      styleBus.reset();
      localStorage.setItem('colors', JSON.stringify(styleBus))
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
