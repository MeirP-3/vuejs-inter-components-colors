<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Choose your style prefs:</h2>
    <ul>
      <li>
        <label for="bg-color">Background color</label>
        <input type="color" id="bg-color" value="#ffffff" @change="bgColorChanged"/>
      </li>
      <li>
        <label for="txt-color">Text color</label>
        <input type="color" id="txt-color" value="#000000" @change="txtColorChanged"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { BG_COLOR, TXT_COLOR } from '../services/consts.js'
import bus from '../services/bus.js'

export default {
  name: 'user-prefs',
  data () {
    return {
      msg: 'User prefferences'
    }
  },
  methods: {
    bgColorChanged(e) {
      bus.$emit(BG_COLOR, e)
    },
    txtColorChanged(e) {
      bus.$emit(TXT_COLOR, e)
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
</style>
